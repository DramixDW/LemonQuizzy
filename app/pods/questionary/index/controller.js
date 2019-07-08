import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  init() {
    this._super(...arguments);
  },
  actions: {
    updateList() {
      let searchName = new RegExp(this.get('searchName'), 'i');
      let searchAuthor = new RegExp(this.get('searchAuthor'), 'i');
      let searchTeacher = document.getElementById('searchTeacher');
      let toFilter = this.get('model');
      let name = false;
      let author = false;
      let teacher = false;
      toFilter = toFilter.filter(elem => {
        //isTeacher search
        if (searchTeacher.checked && elem.author.get('role') === "teacher") teacher = true;
        else if (!searchTeacher.checked) teacher = true;

        //Name search
        if (searchName == undefined || elem.title.match(searchName)) name = true;


        //Author search
        if (searchAuthor == undefined || elem.author.get('username').match(searchAuthor)) author = true;

        return teacher && name && author
      });
      this.set('list', toFilter);
    },
    detract() {
      let retracted = document.getElementById('detracted');
      let symbol = document.getElementById('symbol');
      if (retracted.style.maxHeight !== '800px') {
        symbol.style.transform = 'rotate(90deg)';
        retracted.style.maxHeight = '800px';
      } else {
        symbol.style.transform = 'rotate(0deg)';
        retracted.style.maxHeight = '0px';
      }
    }
  }
});
