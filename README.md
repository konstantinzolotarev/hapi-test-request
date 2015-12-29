# Hapi request test helper

[![Build Status](ci-image)](ci-url)

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

[ci-image]: https://travis-ci.org/konstantinzolotarev/hapi-test-request.svg?branch=master
[ci-url]: https://travis-ci.org/konstantinzolotarev/hapi-test-request
