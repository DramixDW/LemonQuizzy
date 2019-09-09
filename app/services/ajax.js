import AjaxService from 'ember-ajax/services/ajax';
import {computed} from '@ember/object';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default AjaxService.extend({
  namespace: '/api/v1',
  host: 'http://localhost:8001',
  headers: computed(function () {
    return {
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    };
  }),
});
