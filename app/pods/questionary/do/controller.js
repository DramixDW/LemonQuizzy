import Controller from '@ember/controller';

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    setVisibility(name,display){
        let x = document.getElementsByClassName(name);
        for (let i = 0; i < x.length; i++) {
             x[i].style.display = display;
        }
    },
      actions: {
          changeQuestion(id) {
              for(let i=0;i<this.model.questions.length;i++){
                  this.setVisibility(`question-${question.id}`,'none');
              }
              this.setVisibility(`question-${id}`,'block');
          }
      }
});
