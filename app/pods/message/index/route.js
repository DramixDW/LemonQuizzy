import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('message',{
            include:'receiver,sender'
        })
    },
    setupController(controller, model) {
        this._super(...arguments);
        controller.set('list', model);
    }
});
