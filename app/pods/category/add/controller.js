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
            addCat(){
            //let question_type =this.store.findRecord('question-type',this.typeId)
            let category = this.store.createRecord("category", {
                title: this.get("title"),
                description :  this.get("description")
            });
            category.save( { adapterOptions: `admin/${this.get('forumId')}` });
        }
        
    }
});
