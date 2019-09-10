import Route from '@ember/routing/route';

export default Route.extend({
   model(params) {
    this.set('Qid', params.questionary_id);
    return this.store.findRecord('questionary', params.questionary_id, {
      include: 'questions',
      reload: true
    });
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('QId', this.get('Qid'));
  }
});
