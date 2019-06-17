import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('topic',params.topic_id,{
            include: 'user,posts,posts.user'
        }); 
    }
});
