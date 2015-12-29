'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('../lib/index');
const server = require('./server')

describe('call() method :: ', () => {

  const serverStub = {
    inject: sinon.stub().callsArgWith(1, { statusCode: 200, result: {} })
  };

  after((done) => {
    server.stop(done);
  });

  it('should call stubbed method', (done) => {
    request(serverStub)
      .call({})
      .then((data) => {
        expect(data.statusCode).to.be.eq(200);
        expect(data.result).to.be.an('object');
      })
      .then(done)
      .catch(done);
  });

  it('should call hapi server', (done) => {
    request(server)
      .call({
        method: 'GET',
        url: '/hello'
      })
      .then((res) => {
        expect(res.statusCode).to.be.eq(200);
        expect(res.result).to.be.an('object')
          .and.to.have.property('test')
          .and.to.be.eq(true);
      })
      .then(done)
      .catch(done);
  });

  it('should use prefix config option', (done) => {
    const config = {
      prefix: '/api/v1'
    };
    request(server, config)
      .call({
        method: 'GET',
        url: '/test'
      })
      .then((res) => {
        expect(res.statusCode).to.be.eq(200);
        expect(res.result).to.be.an('object')
          .and.to.have.property('test')
          .and.to.be.eq(true);
      })
      .then(done)
      .catch(done);
  });
});
