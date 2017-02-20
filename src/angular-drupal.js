/**
 * The angular-drupal module.
 */
angular.module('angular-drupal', [])

/**
 * The drupal service for the angular-drupal module.
 *
 * @param object drupalSettings
 *   Various settings.  Change these in app.js.
 */
.factory('drupal', ['drupalSettings', '$q', function(drupalSettings, $q) {
  for (config_name in drupalSettings) {
    var config_val = drupalSettings[config_name];

    // jDrupal is initialized globally in jdrupal.js.
    jDrupal.config(config_name, config_val);
  }

  return jDrupal;
}]);
