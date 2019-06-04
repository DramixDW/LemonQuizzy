import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    'created-at': DS.attr('date'),
    'updated-at': DS.attr('date'),
    user: DS.belongsTo('user'),
    category: DS.belongsTo('category'),
    posts : DS.hasMany('post')
});
