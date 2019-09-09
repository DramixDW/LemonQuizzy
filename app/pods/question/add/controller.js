import Controller from '@ember/controller';
import {inject as service} from "@ember/service";
import { observer } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  typeName: "normal",
  text_words : A(),
  text_holes_pos : A(),
  typeId: 0,
  valueObserver: observer('text_hole', function() {
    this.set('text_words',this.get('text_hole').match(/\S+/gm));
  }),
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
    addHole(e) {
      this.get('text_holes_pos').pushObject({idx: e.srcElement.id, text: e.srcElement.text});
    },
    removeHole(e) {
      this.get('text_holes_pos').removeAt(e.srcElement.id);
    },
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
    async addQuizz() {
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
          let goodAnswer = this.get('answer_qcm').split('\n');
          let choiceArr = this.get('answer_qcm').split('\n').concat(this.get('bad_answer_qcm').split('\n'));
          choiceArr = this.shuffle(choiceArr);
          let indexes = [];
          for (let i = 0; i < goodAnswer.length; i++) {
            indexes.push(choiceArr.indexOf(goodAnswer[i]));
          }
          options = {
            choices: choiceArr
          };
          answer = {
            answers: indexes
          };
          break;
        case "table" :
          break;
        case "text_has_gaps" :
          options = {
            holes: this.get('text_holes_pos').toArray().map((e) => parseInt(e.idx))
          };
          answer = {
            answer: this.get('text_hole')
          };
          break;
        case "math" :
          //x[1-10]
          options = {
            variables: {},
            equation: this.get('formula')
          };

          let unknowns = this.get('unknown').split('\n');
          for (let val of unknowns) {
            const [varname, start, end] = val.match(/\w+/g);
            options.variables[varname] = [parseInt(start), parseInt(end)];
          }
          answer = {};

          break;
      }
      let question_type = await this.store.findRecord('questiontype', this.typeId);
      let question = this.store.createRecord("question", {
        title: this.get("title"),
        good_answer_value: parseInt(this.get('good_answer_value')),
        no_answer_value: parseInt(this.get('no_answer_value')),
        bad_answer_value: parseInt(this.get('bad_answer_value')),
        options: options,
        static_answer: answer,
        questiontype: question_type,
        questionary: await this.store.findRecord('questionary', this.get('quizzID'))
      });
      await question.save();
    }
  }
});
