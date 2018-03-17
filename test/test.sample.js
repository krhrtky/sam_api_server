'use strict';
const buildServer = require('../server');

const fastify = buildServer();

fastify.inject(
  {
    method: 'GET',
    url: '/test',
  },
  (err, response) => {
    //t.error(err);
    //t.strictEqual(response.statusCode, 200);
    //t.strictEqual(response.headers['content-type'], 'application/json');
    //t.deepEqual(JSON.parse(response.payload), { hello: 'world' });
    console.log(err);
    console.log(response.statusCode);
  }
);
