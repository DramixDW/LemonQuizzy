import Component from '@ember/component';
import {inject as service} from "@ember/service"

export default Component.extend({
  session: service(),
  actions: {
    displayMenu() {
      let nav = document.getElementById('nav');
      if (nav.style.maxHeight == '1000px') nav.style.maxHeight = '0px';
      else nav.style.maxHeight = '1000px';
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
