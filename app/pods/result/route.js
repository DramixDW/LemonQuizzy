import Route from '@ember/routing/route';

export default Route.extend({
     async model() {
        let results = await  this.store.findAll('questionary-result',{
          reload : true
        });
        return results.get('lastObject');
      }
});
