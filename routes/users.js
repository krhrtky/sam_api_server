'use strict';
const {
  BASE_RESPONSE,
  PARTICIPANTS_RESPONSE,
} = require('../assetes/schema/response');

module.exports = async function(fastify, opt, next) {
  fastify.post('/scan', BASE_RESPONSE, async (req, reply) => {
    fastify.log.info('request: /scan');
    reply.send({ hello: 'scan' });
  });

  fastify.post('/check', BASE_RESPONSE, async (req, reply) => {
    fastify.log.info('request: /check');
    reply.send({ hello: 'check' });
  });

  fastify.post('/register', BASE_RESPONSE, async (req, reply) => {
    fastify.log.info('request: /register');
    reply.send({ hello: 'register' });
  });

  fastify.post('/update', BASE_RESPONSE, async (req, reply) => {
    fastify.log.info('request: /update');
    reply.send({ hello: 'update' });
  });

  fastify.post('/participants', PARTICIPANTS_RESPONSE, async (req, reply) => {
    fastify.log.info('request: /participants');
    reply.send({ hello: 'participants' });
  });

  next();
};
