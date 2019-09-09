import Controller from '@ember/controller';

export default Controller.extend({
  time: null,
  group : null,
  forumID : null,
  actions: {
    onChange(selectedTime) {
      this.set('time',selectedTime);
    },
    onChangeForum(selectedForum){
      this.forumID = selectedForum
    },
    addQuizz() {
      let span = this.get('time');
      let options = {};
      let forum = null;
      if (span && span !== -1) {
        options["timer"] = parseInt(span);
      }
      if(this.forumID) {
        forum = this.store.peekRecord('forum',this.forumID)
      }
      let quizz = this.store.createRecord("questionary", {
        title: this.get('title'),
        options,
        group : null,
        forum : forum
      });
      console.log(quizz);
      quizz.save().then(data => {
        let nquizz = data;
        this.transitionToRoute(`/questionary/edit/${nquizz.id}`);
      });
    },
    setSelection(value) {
      this.set('group',this.store.peekRecord('group',value));
    }
  }
});
