import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  store: service(),
  actions: {
    Answer(topic) {
      let post = this.store.createRecord("post", {
        content: this.get('content'),
        topic: topic
      });
      post.save();
    }
  }
});
