'use strict';

const _ = require('lodash');

/**
 * Call method. Actually it's just reference to {@link Hapi.Server.inject} wrapped into {@link Promise}
 *
 * @param  {Hapi.Server} server
 * @return {Function}
 */
module.exports = function (server) {

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
      // if (options.url && !~options.url.indexOf(config.test.apiPrefix)) {
      //   options.url = config.test.apiPrefix + options.url;
      // }
      return new Promise((resolve, reject) => {
        server.inject(options, (res) => {
          resolve(res);
        });
      })
  };
};
