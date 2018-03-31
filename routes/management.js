module.exports = async function(fastify, opts, next) {
  const {
    ACCESS_RCD_SCHEMA,
    LASTACCESS_RCD_SCHEMA,
    AGGREGATE_SCHEMA
  } = require('../assets/mgmt_schema');

  const handler = (response, reply) => {
    reply.send(response);
  };

  //TODO
  const provider = require('./mgmt_provider')('localhost',9200);

  fastify.get('/users', ACCESS_RCD_SCHEMA, async (request, reply) => {
    //TODO
    provider.getAccessRcd(request.date).then(response => handler(response, reply));
  });

  fastify.get('/users/recent', LASTACCESS_RCD_SCHEMA, async (request, reply) => {
    //TODO
    provider.getLastAcccessRcd().then(response => handler(response,reply));
  });

  fastify.get('/total/user/purpose', AGGREGATE_SCHEMA, async (request, reply) =>{
    //TODO
    provider.getAggregate(request.sort).then(response => handler(response,reply));
  })

  next();
};
