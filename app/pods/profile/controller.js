import Controller from '@ember/controller';
import Ember from 'ember';

const { inject: { service } } = Ember;

export default Controller.extend({
  session:     service('session'),
  currentUser: service('current-user'),

});