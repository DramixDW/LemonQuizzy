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
          options = {
            choices: this.get('answer_qcm').split('\n').concat(this.get('bad_answer_qcm').split('\n'))
          };
          answer = {
            answers: this.get('answer_qcm').split('\n')
          };
          break;
        case "label" :
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
          options = {
            variables: {
              "x": [0, 10],
              "y": [0, 20]
            },
            equation: this.get('formula')
          };
          answer = {};
          break;
      }
      let question_type = this.store.peekRecord('questiontype', this.typeId);
      let quizz = this.store.peekRecord('questionary',this.get('quizzID'))
      let question = this.store.createRecord("question", {
        title: this.get("title"),
        good_answer_value: parseInt(this.get('good_answer_value')),
        no_answer_value: parseInt(this.get('no_answer_value')),
        bad_answer_value: parseInt(this.get('bad_answer_value')),
        options: options,
        answer: answer,
        questiontype: question_type,
        quizz : quizz
      });
      question.save();
    }

  }
});
