import Controller from '@ember/controller';
import {inject as service} from "@ember/service";


export default Controller.extend({
  session: service(),
  router: service(),
  getUser: service("get-user"),
  store: service(),
  actions: {
     signUp() {
      let user = this.store.createRecord("user", {
        username: this.get('username'),
        email: this.get('email'),
        services: "{}",
        firstname: this.get('firstname'),
        lastname: this.get('name'),
        role: 'user',
        password: this.get('password')
      });
      user.save({adapterOptions: 'register'});
      this.transitionToRoute('/sign-in');
    }
  }
});
