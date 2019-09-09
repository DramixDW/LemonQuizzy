import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  isCorrect: DS.attr('boolean'),
  answered: DS.attr('raw'),
  dynamicValues: DS.attr('raw'),
  static_values: DS.attr('raw'),
  'questionary-result': DS.belongsTo('questionary-result'),
  question: DS.belongsTo('question')
});
