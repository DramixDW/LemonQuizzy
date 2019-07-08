import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  fieldname: DS.attr('string'),
  filename: DS.attr('string'),
  path: DS.attr('string'),
  mimetype: DS.attr('string'),
  size: DS.attr('string'),
  user: DS.hasMany('user'),
  users_avatars: DS.hasMany('user', {inverse: 'avatar'}),
  questions_images: DS.hasMany('questions_images'),
  'created-at': DS.attr('date'),
  'updated-ad': DS.attr('date'),
  'deleted-at': DS.attr('date')
});
