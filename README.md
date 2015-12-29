# Hapi request test helper

[![Build Status](https://travis-ci.org/konstantinzolotarev/hapi-test-request.svg?branch=master)](https://travis-ci.org/konstantinzolotarev/hapi-test-request)
[![npm version](https://badge.fury.io/js/hapi-test-request.svg)](https://badge.fury.io/js/hapi-test-request)
[![Dependency Status](http://img.shields.io/david/konstantinzolotarev/hapi-test-request.svg?style=flat-square)](https://david-dm.org/konstantinzolotarev/hapi-test-request)
[![Follow @trailsjs on Twitter](https://img.shields.io/twitter/follow/zolotarev_k.svg?style=social)](https://twitter.com/zolotarev_k)

HTTP assertions made easy for Hapi using Promises

## Requirements

This module requires Node.js v4.1+


## Usage

```javascript
const server = require('../../app');
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

## License
[MIT](https://github.com/konstantinzolotarev/hapi-test-request/blob/master/LICENSE)
