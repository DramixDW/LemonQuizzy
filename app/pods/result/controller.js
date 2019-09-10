import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service('store'),
  router : service('router'),
  pageNum: 1,
  toGoNumber: 0,
  PQId : 0,
  pageTot: null,

  updateCount: function () {
    let pageCount = document.getElementById('pageCount');
    pageCount.innerHTML = `${this.pageNum}/${this.model['questions-results'].length}`;
    if(this.pageTot ===  null )this.pageTot = this.model['questions-results'].length;
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

    }
    

  }


});
