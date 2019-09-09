import Component from '@ember/component';
import {inject as service} from "@ember/service"

export default Component.extend({
  session: service(),
  deferredPrompt : null,
  init() {
    this._super(...arguments);
    console.log("init PWA check");
    window.addEventListener('beforeinstallprompt', (e) => {
      // Stash the event so it can be triggered later.
      e.preventDefault();
      this.set('deferredPrompt',e);
    });

    window.addEventListener('appinstalled', (evt) => {
      console.log('a2hs installed');
    });
  },
  actions: {
    displayMenu() {
      let nav = document.getElementById('nav');
      if (nav.style.maxHeight == '1000px') nav.style.maxHeight = '0px';
      else nav.style.maxHeight = '1000px';
    },
    logout() {
      this.get('session').invalidate();
    },
    installPWA() {
      this.get('deferredPrompt').prompt();
      this.get('deferredPrompt').userChoice
        .then(choiceResult => {
          if(choiceResult.outcome === 'accepted') {
            console.log('user accepted A2HS prompt')
          } else {
            console.log('user dismissed A2HS prompt')
          }
          this.set('deferredPrompt',null);
        });
    }
  }
});
