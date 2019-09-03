import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  'started-at': DS.attr('date'),
  answered: DS.attr('raw'),
  questionary: DS.belongsTo('questionary'),
  currentpoolquestions: DS.hasMany('question-pool'),
  user: DS.belongsTo('user')
});
