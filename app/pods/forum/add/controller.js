import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    init(){
        this._super(...arguments);
    },
    actions: {
        addTopic() {
            let forum = this.store.createRecord("forum", {
                title: this.get('title'),
            });
            forum.save();
            this.transitionToRoute(`/dashboard/forum`);
        }
    }
});
