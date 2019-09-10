import Route from '@ember/routing/route';

export default Route.extend({
   model(params) {
    this.set('Qid', params.questionary_id);
    this.set('model' , this.store.findRecord('questionary', params.questionary_id, {
      include: 'questions'
    }));
    return this.get('model');
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('QId', this.get('Qid'));
    controller.set('model', this.get('model'));
  }
});
