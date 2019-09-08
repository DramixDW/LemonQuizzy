import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  'created-at': DS.attr('date'),
  user: DS.belongsTo('user'),
  'question-result': DS.hasMany('question-result'),
  questionary: DS.belongsTo('questionary'),
});
