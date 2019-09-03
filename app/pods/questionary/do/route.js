import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('QuestionaryID', params.questionary_id);
    let pool=this.store.createRecord('questionary-pool')
    pool.set('questionary', this.store.peekRecord('questionary',params.questionary_id));
    let res = pool.save()
    return res;
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('pageTot', model.currentpoolquestions.length);
    controller.set('QuestionaryID', this.get('QuestionaryID'));

  },
});
