import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  'created-at': DS.attr('date'),
  user: DS.belongsTo('user'),
  'questions-results': DS.hasMany('question-result'),
  questionary: DS.belongsTo('questionary'),
});
