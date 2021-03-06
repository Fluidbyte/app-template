var path = require('path');
var fs = require('fs');

/**
 * @namespace config
 */
var config = {

  /**
   * @property {Object} settings Contains config settings
   */
  settings: {},

  /**
   * Sets the config file defaults or throws
   */
  setDefaults: function (cb) {
    var cfgPath = path.join(__dirname, '/../config.js');
    fs.exists(cfgPath, function (err) {
      if (err) {
        throw err;
      }
      config.settings = require(cfgPath);
      cb();
    });
  },

  /**
   * Checks for (and replaces) matched env var chain
   * @property {String} envVar The environment variable chain
   */
  checkEnv: function (envVar) {

    var envVarUC = envVar.toUpperCase();
    var envVarLC = envVar.toLowerCase();

    // Check for prefix
    if (config.settings.hasOwnProperty('prefix')) {
      envVarUC = (config.settings.prefix + '_' + envVar).toUpperCase();
    }

    // Check for env var
    if (process.env[envVarUC]) {

      // Split into array
      var chain = envVarLC.split('_');

      // Replace property
      var obj = config.settings;
      do {
        obj = obj[chain.shift()];
      } while (chain.length > 1);

      obj[chain[0]] = process.env[envVarUC];
      return true;
    }

    return false;
  },

  /**
   * Builds the settings object from base and env var's
   * @returns {Object} Configuration settings
   */
  build: function () {

    // Walks defaults and check for overrides
    var walk = function (obj, p) {
      p = (p) ? p + '_' : '';
      for (var prop in obj) {
        if (typeof obj[prop] === 'object') {
          if (config.checkEnv(p + prop)) {
            // Replaced, go no deeper
            break;
          } else {
            // Continue recursion
            walk(obj[prop], p + prop);
          }
        } else {
          // End node
          config.checkEnv(p + prop);
        }
      }
    };

    // Load defaults
    config.setDefaults(function () {
      // Start recursion
      walk(config.settings, null);
  
      // Return settings
      return config.settings;
    });

    
  }

};

module.exports = config.build();