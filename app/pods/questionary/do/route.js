import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    this.set('QuestionaryID', params.questionary_id);

    const res = await this.store.peekAll('questionary-pool').filter(async (record) => {
       let questinary = await record.get('questionary');
       const id = questinary.get('id');
       return id == params.questionary_id;
    });

    if (res.length > 0) {
      const idPool = await res[0].get('id');
      const picked = await this.store.peekRecord('questionary-pool',idPool);
      return picked;
    }else{
      let pool= this.store.createRecord('questionary-pool');
      let questionary = await this.store.findRecord('questionary',params.questionary_id);
      pool.set('questionary',questionary);
      return await pool.save();
    }
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('pageTot', model.currentpoolquestions.length);
    controller.set('QuestionaryID', this.get('QuestionaryID'));

  },
});
