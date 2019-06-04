import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.user.data.id');
    if (!isEmpty(userId)) {
      return this.store.findRecord('user', userId).then((user) => {
        this.set('session.user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});