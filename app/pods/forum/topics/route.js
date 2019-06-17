import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findRecord('category',2,{
            include: 'topics'
        }); 
    }
});
