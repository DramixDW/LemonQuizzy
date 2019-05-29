import Controller from '@ember/controller';
import {inject as service} from "@ember/service"

export default Controller.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  store: service(),
  actions:{
    changePass(){
      let pass = this.get('newPassword');
      this.store.findRecord('user', this.get('session.data.authenticated.user.data.id')).then(function(user) {
        user.get('password'); 
        user.set('password', pass);
        user.save(); 
      });
    }
  },
});