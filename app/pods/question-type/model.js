import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name : DS.attr('string'),
    verbose_name : DS.attr('string'),
    'created-at': DS.attr('date'),
    'updated-at': DS.attr('date'),
    questions: DS.hasMany('question')
});
