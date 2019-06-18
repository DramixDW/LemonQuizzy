import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('questionary',params.questionary_id); 
    }
});
