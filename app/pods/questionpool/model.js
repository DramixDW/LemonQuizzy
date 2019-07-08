import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  questionaryPool: DS.belongsTo('questionary-pool'),
  question: DS.belongsTo('question'),
  user: DS.belongsTo('user'),
  answered: DS.attr('raw'),
  answer: DS.attr('raw'),
  isCorrect: DS.attr('boolean'),
  'created-at': DS.attr('date'),
  'answered-at': DS.attr('date')
});
