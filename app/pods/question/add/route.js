import Route from '@ember/routing/route';

export default Route.extend({
    
    model(params){
        this.set('quizzID',params.questionary_id);
        return this.store.findAll('question_type'); 
    },
    setupController(controller) {
        this._super(...arguments);
        controller.set('quizzID', this.get('quizzID'));
    },

});
