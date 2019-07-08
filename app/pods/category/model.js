import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  'created-at': DS.attr('date'),
  user: DS.belongsTo('user'),
  topics: DS.hasMany('topic'),
  forum: DS.belongsTo('forum')
});
