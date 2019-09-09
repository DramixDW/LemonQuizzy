import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  time: null,
  group : null,
  forumID : null,
  color: null,
  currentUser: service('current-user'),
  actions: {
    onChange(selectedTime) {
      this.set('time',selectedTime);
    },
    onChangeForum(selectedForum){
      this.forumID = selectedForum
    },
    onChangeColor(selectedColor){
      this.color = selectedColor
    },
    addQuizz() {
      let span = this.get('time');
      let options = {};
      let forum = null;
      if (span && span !== -1) {
        options["timer"] = parseInt(span);
      }
      if(this.color){
        options["color"] = this.color
      }
      else options["color"] = "green"
      if(this.forumID) {
        forum = this.store.peekRecord('forum',this.forumID)
      }
      let checked = document.getElementById(`public`).checked;
      if(checked) this.group = null;
      let quizz = this.store.createRecord("questionary", {
        title: this.get('title'),
        options,
        group : this.group,
        forum : forum
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
