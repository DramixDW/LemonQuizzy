import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import {inject as service} from "@ember/service";

export default Route.extend({
  session: service('session'),
  currentUser: service('current-user'),
  upload: service('upload'),
  store: service('store'),
  model() {
    const userId = this.get('session.data.authenticated.data.relationships.user.data.id');
    return hash({
      list: this.store.query('questionary', {
        filter: {
          groupId: 'isnull'
        },
        include: 'author',
      }),
      mylist: this.store.query('questionary', {
        filter: {
          authorId: 'eq:' + userId
        },
        include: 'author',
      })
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('list', model.list);
    controller.set('mylist', model.mylist);
  }
});
