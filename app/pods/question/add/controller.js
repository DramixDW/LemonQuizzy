import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  typeName: "normal",
  typeId: 0,
  setVisibility(name, display) {
    let x = document.getElementsByClassName(name);
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = display;
    }
  },
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  },
  init() {
    this._super(...arguments);
  },
  actions: {
    setSelection(selected) {
      let info = selected.split('-');
      this.set('typeId', parseInt(info[1]));
      selected = info[0];
      this.set('typeName', selected);
      let Type = ['normal', 'qcm', 'text_has_gaps', 'label', 'math'];
      let value = selected;
      this.setVisibility('base', 'block');
      for (let i = 0; i < Type.length; i++) {
        this.setVisibility(Type[i], 'none')
      }
      this.setVisibility(value, 'block');
    },
   
    addQuizz() {
      let options;
      let answer;
      switch (this.typeName) {
        case "normal" :
          options = {};
          answer = {
            answer: this.get("answer"),
          };
          break;
        case "qcm" :
          let goodAnswer = this.get('answer_qcm').split('\n')
          let choiceArr = this.get('answer_qcm').split('\n').concat(this.get('bad_answer_qcm').split('\n'))
          choiceArr = this.shuffle(choiceArr);
          let indexes = []
          for(let i=0; i< goodAnswer.length;i++){
            indexes.push(choiceArr.indexOf(goodAnswer[i]));
          }
          options = {
            choices: choiceArr
          };
          answer = {
            answers: indexes
          };
          console.log(options,answer)
          break;
        case "table" :
          break;
        case "text_has_gaps" :
          options = {
            holes: parseInt(this.get('number_hole'))
          };
          answer = {
            answer: this.get('text_hole')
          };
          break;
        case "math" :
          //x[1-10]
          options = {
            variables: {
            },
            equation: this.get('formula')
          };

          let unknowns = this.get('unknown').split('\n');
          for (let val of unknowns) {
            const [varname,start,end] = val.match(/\w+/g);
            options.variables[varname] = [parseInt(start),parseInt(end)];
          }
          answer = {};

          break;
      }
      let question_type = this.store.peekRecord('questiontype', this.typeId);
      let question = this.store.createRecord("question", {
        title: this.get("title"),
        good_answer_value: parseInt(this.get('good_answer_value')),
        no_answer_value: parseInt(this.get('no_answer_value')),
        bad_answer_value: parseInt(this.get('bad_answer_value')),
        options: options,
        static_answer: answer,
        questiontype: question_type,
        questionary : this.store.peekRecord('questionary',this.get('quizzID'))
      });
      question.save();
    }

  }
});
