import Component from '@ember/component';
import {inject as service} from "@ember/service";

export default Component.extend({
    session: service('session'),
    currentUser: service('current-user'),
    store: service(),
    users : [],
    init(){
        let usersId = []
        let toFilter = this.get('list');
        toFilter.forEach(message =>{
            this._super(...arguments);
            let receiver = message.get('receiver.id');
            let sender = message.sender.get('id');
            console.log(receiver,sender,this.get('user.id'))
            if(receiver !== this.get('user.id') && !usersId.includes(receiver)) usersId.push(receiver);
            else if(sender !== this.get('user.id') && !usersId.includes(sender)) usersId.push(sender);
        })
        usersId.forEach(elem =>{
            let user = this.store.findRecord('user',elem)
            this.users.push(user);
        })
        console.log(this.users);
    }
});
