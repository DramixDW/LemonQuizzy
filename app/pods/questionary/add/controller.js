import Controller from '@ember/controller';

export default Controller.extend({
  time: null,
  group : null,

  actions: {
    onChange(selectedTime) {
      this.time = selectedTime;
    },
    addQuizz() {
      let span = this.get('time');
      let options = {};

      if (span && span !== -1) {
        options["timer"] = span;
      }

      let quizz = this.store.createRecord("questionary", {
        title: this.get('title'),
        options,
        group : this.group
      });
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
