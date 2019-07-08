import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    this.set('quizzID', params.questionary_id);
    return this.store.findAll('questiontype');
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('quizzID', this.get('quizzID'));
  },

});
