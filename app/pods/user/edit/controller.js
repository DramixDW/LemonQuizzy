import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  init() {
    this._super(...arguments);
  },
  actions: {
    editUser() {
      this.get('model').save();
      this.transitionToRoute('/dashboard/user');
    }
  }
});
