import Route from '@ember/routing/route';
import adapter from '../../application/adapter';

export default Route.extend({
    model(params){
        let user = this.store.findRecord('user',params.user_id,{
            include:'avatar'
        });
        this.set('user',user);
        let pool = this.store.query('message',{
            id : params.user_id,
            include:'sender'
        }).then(pool =>{
            return pool;
        })
        return pool;
    },
    setupController(controller,model){
        controller.set('model',model);
        controller.set('user',this.get('user'));
    }
});

