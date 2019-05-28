import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        signUp(){
            let user = this.store.createRecord("user", {
                username: this.get('username'),
                email: this.get('email'),
                services: "{}",
                firstname: this.get('firstname'),
                lastname: this.get('name'),
                role: 'user',
                password: this.get('password')
            });
            user.save();
        }
    }
});
