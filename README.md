# Hapi request test helper

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
