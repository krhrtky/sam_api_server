'use strict';
const tap = require('tap');
const buildFastify = require('../server');

tap.test('GET `/` route', t => {
  t.plan(4);

  const fastify = buildFastify();

  // At the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.tearDown(() => fastify.close());

  fastify.inject({
    method: 'GET',
    url: '/test',
  }, response => {
    console.log(response);
    t.strictEqual(response.statusCode, 200);
    t.strictEqual(response.headers['content-type'], 'application/json');
  });
});
