import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findAll('questionary', {
      include: 'author'
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('list', model);
  }
});
