# Hapi request test helper

[![Build Status](https://travis-ci.org/konstantinzolotarev/hapi-test-request.svg?branch=master)](https://travis-ci.org/konstantinzolotarev/hapi-test-request)
[![npm version](https://badge.fury.io/js/hapi-test-request.svg)](https://badge.fury.io/js/hapi-test-request)
[![Dependency Status](http://img.shields.io/david/konstantinzolotarev/hapi-test-request.svg?style=flat-square)](https://david-dm.org/konstantinzolotarev/hapi-test-request)
[![Follow @trailsjs on Twitter](https://img.shields.io/twitter/follow/zolotarev_k.svg?style=social)](https://twitter.com/zolotarev_k)

HTTP assertions made easy for Hapi using Promises

## Requirements

This module requires Node.js v4.1+


## Usage

Server file should export server `server.js`:
```javascript
'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
      return reply({
        test: true
      });
    }
});

server.route({
  method: 'GET',
  path: '/api/v1/test',
  handler: function (request, reply) {
    reply({
      test: true
    });
  }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
});

// !!!!!!!
module.exports = server;

```

Example of `some.test.js`:
```javascript
const server = require('../server.js');
const request = require('hapi-test-request')(server);

//...
let.it('something', (done) => {
  request.call({
  	method: 'POST',
  	url: '/mail',
  	payload: {
  	  email: 'someemail@email.com'
  	}
  }).then((response) => {
    // ....
    expect(response.statusCode).to.equal(200);
    done();
  });
});
```

## Options for testing

```javascript
{
  prefix: '/api/v1' // Will add prefix for all requests
}
```

Example:
```javascript
const server = require('./server');
const request = require('hapi-test-request');
const lab = require('lab');

lab.it('Some tests', (done) => {
  const config = {
    prefix: '/api/v1'
  };
  request(server, config)
    .call({
      method: 'GET',
      url: '/test' // will be merged with prefix. Will be called: /api/v1/test
    })
    .then((res) => {
      expect(res.statusCode).to.equal(200);
    })
    .then(done)
    .catch(done);
});
```
## License
[MIT](https://github.com/konstantinzolotarev/hapi-test-request/blob/master/LICENSE)
