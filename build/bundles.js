// all sample files should not be minified or bundled because it messes up
// how they are shown in the browser, and thus how they are shown in the demo
// but we still want to bundle files that are not "sample" files
var nonSampleBundle = [
  "[shared/*.js]",
  "[*.js]",
  "*.html!text",
  "shared/*.html!text",
  "[installation/*.js]",
  "installation/*.html!text",
  "[about/*.js]",
  "about/*.html!text",
  "[theme-selector/*.js]",
  "theme-selector/*.html!text"
];

var aureliaBundle = [
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console"
];

var pluginsBundle = [
  "[aurelia-materialize-bridge]",
  "[aurelia-materialize-bridge/**/*]",
  "aurelia-materialize-bridge/**/*.css!text",
  "aurelia-materialize-bridge/**/*.html!text",
  "showdown",
  "prism",
  "jquery",
  "nprogress",
  "css",
  "text",
  "json",
  "core-js/library/**/*",
  "babel",
  'showdown-prettify'
];

// concatenate all bundle definitions
var bundle = nonSampleBundle.concat(aureliaBundle, pluginsBundle);


module.exports = {
  "bundles": {
    "src/app-build": {
      "includes": bundle,
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    },
    "src/materialize": {
      "includes": ["materialize"],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
}
