import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    'started-at': DS.attr('date'),
    answered: DS.attr('boolean'),
    questionary: DS.belongsTo('questionary'),
    currentpoolquestions: DS.hasMany('questionpool'),
    user : DS.belongsTo('user')
});
