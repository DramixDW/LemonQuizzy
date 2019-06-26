import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  serverTokenEndpoint: "/auth/facebook",
  restore(data) {
  },

  authenticate(service) {
    console.log(service)
  },

  invalidate(data) {
  }
});
