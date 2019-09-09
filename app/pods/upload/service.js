import Service from '@ember/service';
import { get } from '@ember/object';
import Uploader from 'ember-uploader/uploaders/uploader';
import config from '../../config/environment';
import {inject as service} from "@ember/service"


export default Service.extend({
  session : service('session'),
  store : service('store'),
  async uploadFile(file) {
    const uploader = Uploader.create({
      name: "document",
      url:  `${config.apiPath}/${config.apiNameSpace}/documents`,
      ajaxSettings: {
        headers: { Authorization: 'Bearer '+ get(this, 'session.data.authenticated.data.attributes.access-token') }
      }
    });

    const document = await uploader.upload(file); // can't call serializer in ember
    this.store.push(document);
    return this.store.peekRecord('document',document.data.id);
  },
  async uploadCustom(file,route,customName = 'file',extraData = {}) {
    const uploader = Uploader.create({
      paramName: customName,
      url:  `${config.apiPath}/${config.apiNameSpace}${route}`,
      ajaxSettings: {
        headers: { Authorization: 'Bearer '+ get(this, 'session.data.authenticated.data.attributes.access-token') }
      }
    });

    return uploader.upload(file,extraData); // can't call serializer in ember
  }
});
