import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    services: DS.attr(),
    firstname: DS.attr('string'),
    password: DS.attr('string'),
    lastname: DS.attr('string'),
    role: DS.attr('string'),
    'created-at': DS.attr('date'),
    'updated-at': DS.attr('date'),
    'deleted-at': DS.attr('date'),
});
