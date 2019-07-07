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
        addTopic(category) {
            let topic = this.store.createRecord("topic", {
                title: this.get('title'),
                content: this.get('content'),
                category: category
            });
            topic.save();
        }
    }
});
