import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title : DS.attr('string'),
    'created-at': DS.attr('date'),
    'updated-at': DS.attr('date'),
    good_answer_value: DS.attr('number'),
    no_answer_value: DS.attr('number'),
    bad_answer_value: DS.attr('number'),
    options: DS.attr('raw'),
    question_type: DS.belongsTo('question-type'),
    questionary: DS.belongsTo('questionary')
});
