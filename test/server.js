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

module.exports = server;
