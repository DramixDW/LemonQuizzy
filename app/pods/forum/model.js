import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  title: DS.attr('string'),
  'created-at': DS.attr('date'),
  user: DS.belongsTo('user'),
  categories: DS.hasMany('category')
});
