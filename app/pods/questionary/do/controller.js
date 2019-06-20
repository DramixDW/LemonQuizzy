import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

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
          changeQuestion() {
          }
      }
});
