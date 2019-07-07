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
    console.log(snapshot.adapterOptions);
    if(snapshot.adapterOptions === 'register') return this._super(...arguments).replace('users','') + `auth/register`;
    if(snapshot.adapterOptions !== undefined && snapshot.adapterOptions.includes('admin')){
      let routeInfo = snapshot.adapterOptions.split('/');
      let pluralizedModel = this._super(...arguments).match(/\/[^\/]+$/);
      return this._super(...arguments).replace(pluralizedModel,`/admin/${pluralizedModel}/${routeInfo[1]}`)

    }
    if(snapshot.adapterOptions !== undefined) return this._super(...arguments) + `/${snapshot.adapterOptions}`;
    else return this._super(...arguments);
  },
  urlForUpdateRecord(id, modelName, snapshot) {
    let route = this._super(...arguments)
    if(snapshot.adapterOptions !== undefined && snapshot.adapterOptions.includes('admin')){
      let routeInfo = snapshot.adapterOptions.split('/');
      route = route.replace(/\/[^\/]+$/,'')
      let pluralizedModel = route.match(/\/[^\/]+$/);
      if(routeInfo[1])return route.replace(pluralizedModel,`/admin/${pluralizedModel}/${routeInfo[1]}`)
      else return route.replace(pluralizedModel,`/admin${pluralizedModel}/${id}`)

    }
    if(snapshot.adapterOptions !== undefined) return this._super(...arguments) + `/${snapshot.adapterOptions}`;
    else return this._super(...arguments);
  },
  urlForDeleteRecord(id, modelName, snapshot) {
    let route = this._super(...arguments)
    console.log(snapshot.adapterOptions);
    if(snapshot.adapterOptions !== undefined && snapshot.adapterOptions.includes('admin')){
      let routeInfo = snapshot.adapterOptions.split('/');
      route = route.replace(/\/[^\/]+$/,'')
      let pluralizedModel = route.match(/\/[^\/]+$/);
      if(routeInfo[1])return route.replace(pluralizedModel,`/admin/${pluralizedModel}/${routeInfo[1]}`)
      else return route.replace(pluralizedModel,`/admin${pluralizedModel}/${id}`)

    }
    if(snapshot.adapterOptions !== undefined) return this._super(...arguments) + `/${snapshot.adapterOptions}`;
    else return this._super(...arguments);
  },
  urlForQuery(query, modelName) {
    let baseUrl = this.buildURL(modelName,query.id);
    query.id= undefined
    switch(modelName){
      case 'message':
        return baseUrl
    }
  },
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    if(snapshot.adapterOptions !== undefined)return `${baseUrl.replace(/\/[^\/]+$/,"")}/${snapshot.adapterOptions}/${id}`;
    else return baseUrl
    //return `${baseUrl}/users/${snapshot.adapterOptions.user_id}/playlists/${id}`;
  }
});