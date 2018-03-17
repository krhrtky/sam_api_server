const fastify = require('fastify')();

const schema = {
  require: {
    date: {
      from: { type: 'string' },
      to: { type: 'string' },
    },
  },
  responce: {
    200: {
      type: 'object',
      properties: {
        mail: { type: 'string' },
        name: { type: 'string' },
        purpose: { type: 'string' },
        isEntry: { type: 'boolean' },
        workspace: {
          entry: { type: 'lang' },
          exit: { type: 'lang' },
        },
      },
    },
    500: {
      type: 'object',
      properties: {
        error: {
          message: { type: 'string' },
        },
      },
    },
  },
};

fastify.route({
  method: 'GET',
  url: '/users',
  schema: schema,
});
