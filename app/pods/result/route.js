import Route from '@ember/routing/route';

export default Route.extend({
     async model() {
        let results = await  this.store.findAll('questionary-result',{
          reload : true,
          include : 'questions_results,questions_results.question,questions_results.question.questiontype'
        });
        return results.get('lastObject');
      }
});
