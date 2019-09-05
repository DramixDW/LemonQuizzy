import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let results = this.store.findRecord('questionary-result',4, {
          include: 'question-results,question-results.question',
        });

        results = results.filter(result =>{
          return result.questionary.id == 4 && result.user.id == 114
        })

        return results[results.length-1]
      }
});
