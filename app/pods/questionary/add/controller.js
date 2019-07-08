import Controller from '@ember/controller';

export default Controller.extend({
  time: null,
  options: {
    dropdown: true,
    timeFormat: 'HH:mm',
    interval: 15,
    maxHour: 3
  },

  actions: {
    onChange(selectedTime) {
      this.time = selectedTime;
    },
    addQuizz() {
      let quizz = this.store.createRecord("questionary", {
        title: this.get('title'),
        options: {
          "timer": this.get('time')
        }
      });
      let nquizz;
      quizz.save().then(data => {
        nquizz = data;
        this.transitionToRoute(`/questionary/edit/${nquizz.id}`);
      });
    }
  }
});
