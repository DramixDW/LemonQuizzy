import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('userId', params.user_id);
    return this.store.findAll('questionary', {
      include: 'author'
    });
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('userID', this.get('userId'));
  }
});
