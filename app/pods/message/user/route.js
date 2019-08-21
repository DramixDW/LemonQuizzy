import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.store.unloadAll();
    let user = this.store.findRecord('user', params.user_id, {
      include: 'avatar'
    });
    this.set('user', user);
    this.set('receiverId', params.user_id);
    return this.store.query('message', {
      id: params.user_id,
      include: 'sender,sender.avatar'
    }).then( pool =>{
      return pool.toArray();
    })
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('user', this.get('user'));
    controller.set('receiverId',this.get('receiverId'));
  }
});

