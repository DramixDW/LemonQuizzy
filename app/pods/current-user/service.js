import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.tokenData.sub');
    if (!isEmpty(userId)) {
      return this.store.findRecord('user', userId).then((user) => {
        this.set('session.user', {id: userId,role: user.role, email: user.email, firstname: user.firstname, lastname: user.lastname, username: user.username, 'created-at': user.get('created-at'), avatar: user.avatar.get('filename')});
      });
    } else {
      return RSVP.resolve();
    }
  }
});