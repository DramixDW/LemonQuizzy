import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('QuestionaryID', params.questionary_id);
    return this.store.createRecord('questionary-pool',params.questionary_id)
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('pageTot', model.currentpoolquestions.length);
    controller.set('QuestionaryID', this.get('QuestionaryID'));

  },
});
