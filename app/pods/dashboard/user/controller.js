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
    removeUser(id) {
      this.store.findRecord("user", id).then(user => {
        user.destroyRecord()
      });
    },
    updateList() {
      let search = this.get('search');
      let toFilter = this.get('model');
      toFilter = toFilter.filter(elem => {
        return elem.email.indexOf(search) !== -1
      });
      this.set('list', toFilter);
    }
  }
});
