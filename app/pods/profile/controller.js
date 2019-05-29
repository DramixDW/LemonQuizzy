import Controller from '@ember/controller';
import {inject as service} from "@ember/service"

export default Controller.extend({
  session:     service('session'),
  currentUser: service('current-user'),
  store: service(),
  actions:{
    changePass(){
      let pass = this.get('newPassword');
      let oldPass = this.get('oldPass');
      let confirm = this.get('confirmPassword');
      if(pass !== confirm){
        this.set('errorMessage', "New password and confirmation must match");
        return false;
      }
      this.store.findRecord('user', this.get('session.data.authenticated.user.data.id')).then(function(user) {
        user.get('password'); 
        if(oldPass !== user.get('password')){
          this.set('errorMessage', "Current password is incorrect");
          return false;
        }
        user.set('password', pass);
        user.save(); 
      });
    }
  },
});