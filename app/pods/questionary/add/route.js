import Route from '@ember/routing/route';

export default Route.extend({
    model() {
      return this.store.findAll('group');
    },
    setupController(controller){
      this._super(...arguments);
      let forum = this.store.findAll('forum');
      controller.set('forum', forum);
      controller.set('options',{
          dropdown: true,
          timeFormat: 'HH:mm',
          interval: 15,
          maxHour: 3
      });
    }
});
