import DS from 'ember-data';
import { computed } from '@ember/object';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin,{
  host: 'http://localhost:8001',
  namespace: 'api/v1',
  headers: computed(function() {
    return {
      'Content-Type': 'application/vnd.api+json',
      'Accept' : 'application/vnd.api+json'
    };
  }),
  urlForCreateRecord(modelName, snapshot) {
    if(snapshot.adapterOptions !== undefined) return this._super(...arguments) + `/${snapshot.adapterOptions}`;
    else return this._super(...arguments);
  },
});