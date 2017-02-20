/**
 * The angular-drupal module.
 */
angular.module('angular-drupal', [])

/**
 * The drupal service provider for the angular-drupal module.
 *
 * @param object settings
 *   Various settings overrides.  Change these in app.js.
 */
.provider('drupal', function drupalProvider() {
  this.setConfigs = function(settings) {
    // Loop through key/value pairs and override default configs in jDrupal.
    for (config_name in settings) {
      var config_val = settings[config_name];

      // jDrupal is initialized globally in jdrupal.js.
      jDrupal.config(config_name, config_val);
    }
  };

  this.$get = [function drupalFactory() {
    return jDrupal;
  }];
});
