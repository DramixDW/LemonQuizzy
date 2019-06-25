import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        this.set('QuestionaryID',params.questionary_id)
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
        controller.set('QuestionaryID', this.get('QuestionaryID'));
        
    },
});
