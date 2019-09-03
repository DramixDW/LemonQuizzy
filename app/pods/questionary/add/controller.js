import Controller from '@ember/controller';

export default Controller.extend({
  time: null,

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
      quizz.save().then(data => {
        console.log(data)
        let nquizz = data;
        this.transitionToRoute(`/questionary/edit/${nquizz.id}`);
      });
    }
  }
});
