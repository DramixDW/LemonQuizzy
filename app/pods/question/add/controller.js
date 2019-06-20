import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    typeId:1, 
    setVisibility(name,display){
        let x = document.getElementsByClassName(name);
        for (let i = 0; i < x.length; i++) {
             x[i].style.display = display;
        }
    },
    init(){
        this._super(...arguments);
    },
    actions: {
        setSelection(selected) {
            this.set('typeId',selected);
            let Type = ['base','normal','qcm','hole','label','math'];
            let value = Type[selected];
            this.setVisibility('base','block');
            for(let i= 1;i<Type.length;i++){
                this.setVisibility(Type[i],'none')
            }
            this.setVisibility(value,'block');
        },
        addQuizz(){
            let option;
            switch(this.typeId){
                case "1" :
                    option={
                        answer : this.get('answer'),
                    };
                    break;
                case "2" :
                    option={
                        answer : this.get('answer_qcm').split('|'),
                        bad_answer : this.get('bad_answer_qcm').split('|')
                    }
                    break;
                case "3" :
                    break;
                case "4" :
                    option={
                        text:this.get('text_hole'),
                        holeNumer:this.get('number_hole')
                    }
                    break;
                case "5" :
                    option={
                        unknown: this.get('unknown').split(','),
                        formula:this.get('formula')
                    }
                    break;  
            }
            //let question_type =this.store.findRecord('question-type',this.typeId)
            let question = this.store.createRecord("question", {
                title: this.get('title'),
                good_answer_value :  parseInt(this.get('good_answer_value')),
                no_answer_value :  parseInt(this.get('no_answer_value')),
                bad_answer_value :  parseInt(this.get('bad_answer_value')),
                options : option,
                question_type: this.typeId
            });
            //console.log(question)
            question.save( { adapterOptions: this.get('quizzID') });
        }
        
    }
});
