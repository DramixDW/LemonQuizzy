import Route from '@ember/routing/route';
import adapter from '../../application/adapter';

export default Route.extend({
    model(params){
        let pool = this.store.query('message',{
            id : params.user_id
        }).then(pool =>{
            return pool;
        })
        return pool;
    }
});

