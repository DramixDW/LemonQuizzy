import Controller from '@ember/controller';
let time;
export default Controller.extend({
    options: {
        dropdown: true,
        timeFormat: 'HH:mm',
        interval: 15,
        maxHour: 3
    },
  
      actions: {
          onChange(selectedTime) {
              time = selectedTime;
          },
          addQuizz(){
            let quizz = this.store.createRecord("questionary", {
                title: this.get('title'),
                options:{
                    "timer" : time
                }
            });
            let nquizz;
            quizz.save().then(data =>{
                nquizz = data;
                this.transitionToRoute(`/questionary/edit/${nquizz.id}`);
            });
          }
      }
});
