import Controller from '@ember/controller';

export default Controller.extend({
    // session: service(),
    // router: service(),
    // getUser: service("get-user"),
    // store: service(),
    // actions: {
    //     authenticate() {
    //         let _this = this;
    //         let { identification, password } = this.getProperties('username', 'password');
    //         if (identification === undefined || password === undefined) {
    //             return false;
    //         }
    //         this.get('session').authenticate('authenticator:jwt', { email: username, password: password })
    //             .catch(() => {
    //                 this.set('errorMessage', "Wrong password or username");
    //                 return false;
    //             }).then(() => {
    //                 _this.get('getUser')._scope(_this.get('session.data.authenticated.tokenData.sub'))
    //                 this.get('router').transitionTo('user');
    //             })
    //     },
    //     invalidateSession() {
    //         this.get('session').invalidate();
    //     }
    // }
});
