import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    pageNum: 1,
    toGoNumber:0,
    updateCount: function(){
        let pageCount = document.getElementById('pageCount');
        pageCount.innerHTML = `${this.pageNum}/${this.pageTot}`;
    },
    setVisibility(name,display){
        let x = document.getElementsByClassName(name);
        for (let i = 0; i < x.length; i++) {
             x[i].style.display = display;
        }
    },
    switchQuestion (fromRight){
        //pageNum start at 1 but question.index start at 0. Therefore, pageNum is the question at the right and actual question is pagenum -1 
        let toGo
        let toComeNumber = this.pageNum - 1;
        let toRight = this.pageNum -2;
        let toCome = document.getElementById(`question-${toComeNumber}`);
        if(fromRight){
            toGo = document.getElementById(`question-${toRight}`);
            this.toGoNumber = toRight;
        } 
        else{
            toGo = document.getElementById(`question-${this.pageNum}`);
            this.toGoNumber = this.pageNum;     
        } 
        toGo.style.width = "0px";
        toGo.style.height = "0px";
        toCome.style.width = "100vw";
        toCome.style.height = "auto";
    },

    sendAnswer(current){
        let answered;
        let Qnum;
        let name;
        let QId;
        let question;
        let Quespool;
        if(current) Qnum = this.pageNum-1
        else Qnum = this.toGoNumber 
        let Qpool = this.model.currentpoolquestions;
        Qpool.forEach( (elem, index) =>{
            if(index == Qnum ){
                name = elem.question.get('questiontype.name');
                QId = elem.question.get('id');
                question = elem.get('question');
                Quespool = elem;
            }    
        })
        console
        switch(name){
            case "normal":
                let answerNormal = document.getElementById(Qnum).value
                answered={
                    value: answerNormal
                }
                break;
            case "qcm":
                let holeNumber = question.get('options.answers').length;
                let answerQcm = [];
                for(let i=0;i<holeNumber;i++){
                    let checked = document.getElementById(`${Qnum}-answer-${i}`).checked;
                    if(checked) answerQcm.push(document.getElementById(`${Qnum}-label-${i}`).innerHTML)  
                }
                answered={
                    value: answerQcm
                }
                break;
            case "text_has_gaps":
                let textWithGaps  = Quespool.answer.answer;
                let text="";
                for(let i=0;i<textWithGaps.length;i++){
                    if(textWithGaps[i]==="") text += document.getElementById(`${Qnum}-answer-${i}`).value+" ";
                    else text += textWithGaps[i]+" "
                }
                answered={
                    value : text
                }
                break;
            case "math":
                 let answerMath = document.getElementById(Qnum).value
                answered={
                    value: parseInt(answerMath)
                }
                console.log(answered);
                break;
        }
        let questionPool = this.store.createRecord('question')
        questionPool.set('answered',answered);
        questionPool.save({adapterOptions:`answer/${QId}/${this.QuestionaryID}`});
    },
      actions: {
        goLeft: function(){
            if(this.pageNum === 1) return;
            else this.pageNum--;
            this.updateCount();
            this.switchQuestion(false);
            this.sendAnswer(false)  
        },
        goRight: function(){
            if(this.pageNum === this.pageTot) return;
            else this.pageNum++;
            this.updateCount();
            try {
               this.switchQuestion(true);
            } catch (error) {
               console.log(error);
            }
            this.sendAnswer(false) 
        },
        validate: function(){
            this.sendAnswer(true);
            let questionary = this.store.createRecord('questionary');
            questionary.set('title','banana')
            console.log(questionary);
            let meta
            questionary.save({adapterOptions:`answer/${this.QuestionaryID}`}).then(answer =>{
                let meta = answer;
                console.log(answer);
            });
        }     
    }
    
   
});
