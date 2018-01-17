'use strict';
//const SCHEMA = require('../assetes/schema');
const SCHEMA = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
};

module.exports = async function(fastify, opt, next) {
  fastify.get('/scan', SCHEMA, async (req, reply) => {
    fastify.log.info('request: /scan');
    reply.send({ hello: 'scan' });
  });

  fastify.post('/check', SCHEMA, async (req, reply) => {
    fastify.log.info('request: /check');
    reply.send({ hello: 'check' });
  });

  fastify.post('/register', SCHEMA, async (req, reply) => {
    fastify.log.info('request: /register');
    reply.send({ hello: 'register' });
  });

  fastify.post('/update', SCHEMA, async (req, reply) => {
    fastify.log.info('request: /update');
    reply.send({ hello: 'update' });
  });

  fastify.post('/participants', SCHEMA, async (req, reply) => {
    fastify.log.info('request: /participants');
    reply.send({ hello: 'participants' });
  });

  next();
};
