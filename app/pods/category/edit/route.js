import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id, {
      include: 'forum'
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    let forum = this.store.findAll('forum');
    Ember.set(controller, 'forum', forum);
  }
});
