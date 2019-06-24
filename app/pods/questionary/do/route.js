import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('questionary',params.questionary_id,{
            include: 'questions,questions.questiontype'
        }); 
    },
    setupController(controller,model) {
        this._super(...arguments);
        controller.set('pageTot', model.questions.length);
    },
});
