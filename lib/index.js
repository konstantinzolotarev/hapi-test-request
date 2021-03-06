'use strict';

/**
 * Will return function that require server as a parameter
 *
 * Usage:
 * ```javascript
 * const server = require('../../app');
 * const request = require('../helper/request')(server);
 *
 * //...
 * let.it('something', (done) => {
 *   request.call({
 *   	method: 'POST',
 *   	url: '/mail',
 *   	payload: {
 *   	  email: 'someemail@email.com'
 *   	}
 *   }).then((response) => {
 *     // ....
 *     expect(response.statusCode).to.equal(200);
 *     done();
 *   });
 * });
 * ```
 *
 * @param  {Hapi.Server} server
 * @param  {Object} [config]
 * @return {Object}
 */
module.exports = function (server, config) {
  config = config || {};

  return {
    call: require('./actions/call')(server, config)
  };
};
