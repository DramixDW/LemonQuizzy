import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
    session: service(),
    router: service(),
    getUser: service("get-user"),
    store: service(),
    validateEmail(value){
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        return value.match(regexEmail)
    },
    validateLength(value,min,max){
        return value.length <= max && value.length >= min;
    },
    actions: {
        authenticate() {
            let _this = this;
            let { identification, password } = this.getProperties('identification', 'password');
            if (identification === undefined || password === undefined) {
                return false;
            }
            this.get('session').authenticate('authenticator:jwt', { email: identification, password: password })
                .catch(() => {
                    this.set('errorMessage', "Wrong password or username");
                    return false;
                }).then(() => {
                    _this.get('getUser')._scope(_this.get('session.data.authenticated.tokenData.sub'))
                    this.get('router').transitionTo('index');
                })
        }
    }
});
