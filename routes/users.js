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
    //fastify.log.info('request: /scan');
    fastify.log.info(req.body.cardId);
    reply.send({
      result: true,
      message: 'success',
    });
  });

  fastify.post('/check', CHECK_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /check');
    reply.send({ hello: 'check' });
  });

  fastify.post('/register', REGISTOR_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /register');
    reply.send({ hello: 'register' });
  });

  fastify.post('/update', UPDATE_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /update');
    reply.send({ hello: 'update' });
  });

  fastify.get('/participants', PARTICIPANTS_SCHEMA, async (req, reply) => {
    fastify.log.info('request: /participants');
    reply.send({ hello: 'participants' });
  });

  //fastify.post(
  //  '/test',
  //  {
  //    schema: {
  //      body: Joi.object()
  //        .keys({
  //          hello: Joi.string().required(),
  //        })
  //        .required(),
  //    },
  //    schemaCompiler: schema => data => Joi.validate(data, schema),
  //  },
  //  async (req, reply) => {
  //    fastify.log.info('request: /participants');
  //    reply.send({ hello: 'participants' });
  //  }
  //);

  next();
};
