'use strict';
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('./routes/user'), { logLevel: 'debug' });

fastify.listen(3000, err => {
  fastify.log.info('fastify listend 3000');
  if (err) throw err;
});
