import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  name: DS.attr('string'),
  'created-at': DS.attr('date'),
  author: DS.belongsTo('user'),
  users: DS.hasMany('user'),
});
