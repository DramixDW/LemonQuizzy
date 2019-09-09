'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'esw-cache-fallback': {
      patterns: [
        '/api/v1/(.+)'
      ],
    },
    'ember-service-worker': {
      enabled: true
    }
  });

  return app.toTree();
};
