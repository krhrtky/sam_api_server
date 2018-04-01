const fastify = require('./server')();

fastify.listen(3000, err => {
  fastify.log.info('fastify listend 3000');
  if (err) throw err;
});
