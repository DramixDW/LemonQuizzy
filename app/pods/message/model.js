import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    content : DS.attr('string'),
    receiver : DS.belongsTo('user'),
    sender : DS.belongsTo('user'),
    'created-at' : DS.attr('date'),
    'updated-at' : DS.attr('date')

});
