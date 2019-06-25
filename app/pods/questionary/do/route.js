import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let pool = this.store.queryRecord('questionarypool',{
            id: params.questionary_id 
        }).then(pool =>{
            return pool;
        })
        return pool;
    },
    setupController(controller,model) {
        this._super(...arguments);
        controller.set('pageTot', model.currentpoolquestions.length);
        
    },
});
