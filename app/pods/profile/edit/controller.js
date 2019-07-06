import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    init(){
        this._super(...arguments);
    },
    actions:{
        editProfile(){
            let user = this.store.peekRecord('user',this.get('session.data.authenticated.tokenData.sub'))
            user.set('email',this.get('email'));
            user.set('firstname',this.get('firstname'));
            user.set('lastname',this.get('lastname'));
            user.set('username',this.get('username'));
            user.save();
            this.transitionToRoute('profile'); 
        }
    }
});
