'use strict';

//const client =
//  process.env.NODE_ENV === 'test'
//    ? require('../test/responseStub')
//    : new (require('esclient'))();

const {
  REGISTOR_SCHEMA,
  UPDATE_SCHEMA,
  PARTICIPANTS_SCHEMA,
} = require('../assetes/schema');

module.exports = async function(fastify, opt, next) {
  fastify.post('/register', REGISTOR_SCHEMA, async (req, reply) => {
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/update', UPDATE_SCHEMA, async (req, reply) => {
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/entry', UPDATE_SCHEMA, async (req, reply) => {
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/out', UPDATE_SCHEMA, async (req, reply) => {
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.get('/users/:date', UPDATE_SCHEMA, async (req, reply) => {
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.get('/participants', PARTICIPANTS_SCHEMA, async (req, reply) => {
    reply.send([
      {
        name: 'John Doe',
        porpose: 'study',
        isEntry: true,
      },
    ]);
  });

  next();
};
