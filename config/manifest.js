'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/zonkyio/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "lemon-quizzy",
    short_name: "lemon-quizzy",
    description: "an app about quizz",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        "src": "/assets/images/logo.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "/assets/images/logo512x512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
