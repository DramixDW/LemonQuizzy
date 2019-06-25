import DS from 'ember-data';
import { underscore } from '@ember/string';



export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, clazz, payload) {
    const result = this._super(...arguments);
    result.meta = result.meta || {};

    if (payload.links) {
      result.meta.pagination = this.createPageMeta(payload.links);
    }

    return result;
  },

  serialize(snapshot,options){
    let json = this._super(...arguments);
    console.log(json)
    if(snapshot.adapterOptions.includes('answer')){
      //answered = json.data.attributes.answered
      //json.data.attributes.answered = answered
    }


    return json;
  },

  
  payloadKeyFromModelName(modelName) {
    return underscore(modelName);
  },

  createPageMeta(data) {

    let meta = {};

    Object.keys(data).forEach(type => {
      const link = data[type];
      meta[type] = {};
      let a = document.createElement('a');
      a.href = link;

      a.search.slice(1).split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (param == 'page%5Bnumber%5D') {
          meta[type].number = parseInt(value);
        }
        if (param == 'page%5Bsize%5D') {
          meta[type].size = parseInt(value);
        }

      });
      a = null;
    });

    return meta;

  }

});