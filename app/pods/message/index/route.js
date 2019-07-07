import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('message',{
            include:'receiver,sender,receiver.avatar,sender.avatar'
        })
    },
    setupController(controller, model) {
        this._super(...arguments);
    }
});
