import Route from '@ember/routing/route';

export default Route.extend({
     async model() {
        let results = await  this.store.findAll('questionary-result',{
          include: 'questions_results,questions_results.question',
        });    
        return results.get('lastObject')
      }
});
