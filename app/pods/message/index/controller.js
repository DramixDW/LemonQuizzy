import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session:     service('session'),
    currentUser: service('current-user'),
    store: service(),
    init(){
        this._super(...arguments);
    },
    didInsertElement(){
        let users = []
        console.log('hey');
        let toFilter = this.get('list');
        toFilter.forEach(message =>{
            if(message.receiver.id !== user.id && users.includes(message.receiver.id)) users.push(message.receiver.id);
            else if(message.sender.id !== user.id && users.includes(message.sender.id)) users.push(message.sender.id);
        })
        console.log(toFilter);
    },
    actions: {
    }
});