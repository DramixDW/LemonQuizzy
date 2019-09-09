import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  upload: service('upload'),
  store: service('store'),
  actions: {
    async changeProfilePicture(file) {
      const userId = this.get('session.data.authenticated.data.relationships.user.data.id');
      let document = await this.upload.uploadFile(file.blob);
      let user = this.store.peekRecord('user',userId);
      user.set('avatar',document);
      await user.save();
      this.get('session').set('user.avatar', document.filename);
    },
    async registerCSV(file) {
      if (file) {
        const newGroup = this.store.createRecord('group');
        newGroup.set('name',this.get('groupName'));
        await newGroup.save();
        file = await this.upload.uploadCustom(file.blob,'/auth/registerCSV','csv',{
          groups : [newGroup.get('id')]
        });
        window.open('data:application/pdf;base64,' + file);
      }
    },
    changePass() {
      let pass = this.get('newPassword');
      let oldPass = this.get('oldPass');
      let confirm = this.get('confirmPassword');
      if (pass !== confirm) {
        this.set('errorMessage', "New password and confirmation must match");
        return false;
      } else if (pass === oldPass) {
        this.set('errorMessage', "New password can't be old password");
        return false;
      }
      this.store.findRecord('user', this.get('session.data.authenticated.user.data.id')).then(function (user) {
        user.get('password');
        user.set('password', pass);
        user.save();
      });
    }
  },
});
