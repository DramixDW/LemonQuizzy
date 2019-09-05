import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  isCorrect: DS.attr('boolean'),
  'questionary-result': DS.hasMany('questionary-result'),
  question: DS.hasMany('question')
});
