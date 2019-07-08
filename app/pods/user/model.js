import DS from 'ember-data';

const {Model} = DS;

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
  avatar: DS.belongsTo('document', {inverse: 'users_avatars'}),
  documents: DS.hasMany('document'),
  messages: DS.hasMany('message', {inverse: 'sender'}),
  received: DS.hasMany('message', {inverse: 'receiver'}),
  questionaries: DS.hasMany('questionary')
});
