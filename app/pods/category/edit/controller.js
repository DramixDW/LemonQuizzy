import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    forumId:1, 
    init(){
        this._super(...arguments);
    },
    actions: {
        setSelection(selected) {
            this.set('forumId',selected);
        },
        editCat(){
            console.log(this.get('model.forum'));
            let forum =this.store.peekRecord('forum',this.forumId)
            this.model.set('forum',forumId);
            this.get('model').save({ adapterOptions: `admin`});
            this.transitionToRoute('/dashboard/category')
        }
        
    }
});
