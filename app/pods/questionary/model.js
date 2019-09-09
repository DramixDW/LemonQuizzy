import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  title: DS.attr('string'),
  'created-at': DS.attr('date'),
  'updated-at': DS.attr('date'),
  author: DS.belongsTo('user'),
  questions: DS.hasMany('question'),
  group: DS.belongsTo('group'),
  results: DS.hasMany('results'),
  options: DS.attr('raw'),
  forum : DS.belongsTo('forum'),
  current_questionaries: DS.hasMany('questionary-pool')

});
