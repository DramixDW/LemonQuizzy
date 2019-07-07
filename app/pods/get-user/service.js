    
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
    store: service(),
    session: service(),
    _tokenData() {
        if (!isEmpty(this.get("session.data.authenticated.Token"))) {
            let tokenData = this.get("session.data.authenticated.tokenData.sub")
            return tokenData
        }
        return false;
    },
    _scope(sub){
        let _this = this;
        this.store.findRecord('user', sub ,{
            include : 'avatar'
        }).then(function(user){
            _this.set('session.user', {role: user.role, email: user.email, firstname: user.firstname, lastname: user.lastname, username: user.username, 'created-at': user.get('created-at'), avatar: user.avatar.get('filename') });
        });
        if (!isEmpty(this.get("session.data.authenticated.Token"))) {
            return this.get("session.data.authenticated.tokenData.sub.scope")
        }
        return false;
    }
});