import Controller from '@ember/controller';
import {inject as service} from "@ember/service";


export default Controller.extend({
    session: service('session'),
    currentUser: service('current-user'),
    store: service(),
    cleanModel(){
        this.set('model',undefined)
    },
    actions:{
        sendMessage(){
            let receiver = this.store.peekRecord('user',this.receiverId)
            let message = this.store.createRecord('message');
            let box = document.getElementById(`box`)
            message.set('content',this.get('content'));
            message.set('receiver',receiver)
            message.save();
            this.model.pushObject(message);
            this.set('content',undefined)
            box.scrollTop = 3000000
        }
    }
});
