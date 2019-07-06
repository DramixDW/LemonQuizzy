'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'lemon-quizzy',
				podModulePrefix: 'lemon-quizzy/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    apiPath: "//localhost:8001",
    apiNameSpace: "api/v1",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }



  ENV["ember-simple-auth"] = {
    authorizer: "authorizer:token",
    crossOriginWhitelist: ["*"],
    routeAfterAuthentication: "index",
    authenticationRoute: "login"
  };

  ENV["ember-simple-auth-token"] = {
    serverTokenEndpoint: ENV['apiPath']+'/'+ENV['apiNameSpace']+'/auth/login',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'data.attributes.access-token',
    refreshTokenPropertyName: 'data.attributes.refresh-token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
    serverTokenRefreshEndpoint: ENV['apiPath']+'/'+ENV['apiNameSpace']+'/auth/refresh-token',
    refreshAccessTokens: true,
    refreshLeeway: 15
  };


  return ENV;
};
