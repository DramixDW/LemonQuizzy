import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('forum', {
      include: 'categories'
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('list', model);
  }
});
