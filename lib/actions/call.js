'use strict';

const _ = require('lodash');

/**
 * Call method. Actually it's just reference to {@link Hapi.Server.inject} wrapped into {@link Promise}
 *
 * @param  {Hapi.Server} server
 * @param  {Object} [config]
 * @return {Function}
 */
module.exports = function (server, config) {

  config = config || {};

  /**
   * Wrapper
   * @param  {Object} options
   * @return {Promise}
   */
  return function (options) {
    if (!_.isObject(options)) {
        throw new Error('Wrong options provided');
      }
      if (!options.method) {
        options.method = 'GET';
      }
      if (options.url && config.prefix && !~options.url.indexOf(config.prefix)) {
        options.url = config.prefix + options.url;
      }
      return new Promise((resolve, reject) => {
        server.inject(options, (res) => {
          resolve(res);
        });
      })
  };
};
