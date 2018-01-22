'use strict';

module.exports = async function(fastify, opt, next) {
  const {
    SCAN_SCHEMA,
    CHECK_SCHEMA,
    REGISTOR_SCHEMA,
    UPDATE_SCHEMA,
    PARTICIPANTS_SCHEMA,
  } = require('../assetes/schema');

  fastify.post('/scan', SCAN_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /scan');
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/check', CHECK_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /check');
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/register', REGISTOR_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /register');
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/update', UPDATE_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /update');
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.get('/participants', PARTICIPANTS_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /participants');
    reply.send({ hello: 'participants' });
  });

  next();
};
