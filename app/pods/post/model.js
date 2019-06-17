import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    content: DS.attr('string'),
    'created-at': DS.attr('date'),
    'updated-at': DS.attr('date'),
    user: DS.belongsTo('user'),
    topic: DS.belongsTo('topic')
});
