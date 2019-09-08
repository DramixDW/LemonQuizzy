import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  pageNum: 1,
  toGoNumber: 0,
  PQId : 0,
  updateCount: function () {
    let pageCount = document.getElementById('pageCount');
    pageCount.innerHTML = `${this.pageNum}/${this.pageTot}`;
  },
  setVisibility(name, display) {
    let x = document.getElementsByClassName(name);
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = display;
    }
  },
  switchQuestion(fromRight) {
    //pageNum start at 1 but question.index start at 0. Therefore, pageNum is the question at the right and actual question is pagenum -1 
    let toGo;
    let toComeNumber = this.pageNum - 1;
    let toRight = this.pageNum - 2;
    let toCome = document.getElementById(`question-${toComeNumber}`);
    if (fromRight) {
      toGo = document.getElementById(`question-${toRight}`);
      this.toGoNumber = toRight;
    } else {
      toGo = document.getElementById(`question-${this.pageNum}`);
      this.toGoNumber = this.pageNum;
    }
    
    toGo.style.width = "0px";
    toGo.style.height = "0px";
    toCome.style.width = "100vw";
    toCome.style.height = "auto";
  },

  async sendAnswer(Qnum) {
    let answered;
    let name;
    let question;
    let Quespool;
    let Qpool = this.model.currentpoolquestions;
    let Q = document.getElementById(`question-${Qnum}`)
    this.PQId = Q.getAttribute("idq");
    Qpool.forEach((elem, index) => {
      if (index == Qnum) {
        name = elem.question.get('questiontype.name');
        question = elem.get('question');
        Quespool = elem;
      }
    });
    let answerQcm = [];
    let answersNumber;
    let textWithGaps;
    let text;
    switch (name) {
      case "normal":
        answered = {
          value: document.getElementById(Qnum).value
        };
        break;
      case "qcm":
        answersNumber = question.get('options.choices').length;
        for (let i = 0; i < answersNumber; i++) {
          let checked = document.getElementById(`${Qnum}-answer-${i}`).checked;
          if (checked)  answerQcm.push(parseInt(i))
        }
        answered = {
          value: answerQcm
        };
        break;
      case "text_has_gaps":
        textWithGaps = Quespool.dynamicValues.answer;
        let answer = [];
        for (let i = 0; i < textWithGaps.length; i++) {
          if (textWithGaps[i] === null ) answer.push(document.getElementById(`${Qnum}-answer-${i}`).value);
          else text += textWithGaps[i] + " "
        }
        answered = {
          value: text.trim()
        };
        break;
      case "math":
        answered = {
          value: parseInt(document.getElementById(Qnum).value)
        };
        break;
      case "table":
        let table = Qpool.objectAt(Qnum);
        let array = {...table.dynamicValues};
        for(let i=0 ; i<array['rows'].length;i++){
          for(let c=0; c<array['rows'][i].length;c++){
            if(array['rows'][i][c] == null) array['rows'][i][c]= document.getElementById(`${Qnum}-${i}-${c}`).value
          }
        }
        answered = {
          value : array['rows']
        }
        break;
    }
   this.store.findRecord('question-pool',this.PQId).then(questionPool =>{
      questionPool.set('answered',answered);
      questionPool.save();
    });

  },
  actions: {
    goLeft:  function () {
      if (this.pageNum === 1) return;
      else this.pageNum--;
      this.updateCount();
      this.switchQuestion(false);
    },
    goRight:   function () {
      if (this.pageNum === this.pageTot) return;
      else this.pageNum++;
      this.updateCount();
      this.switchQuestion(true);
      
    },
    validate:  async function () {
      let Qpool = this.model.currentpoolquestions;
      for(let i=0;i<Qpool.length;i++){
        await this.sendAnswer(i);
      }
      let questionary = this.store.peekRecord('questionary-pool',this.model.id);
      questionary.save();
      this.transitionToRoute('result');

    }
  }


});
