const fastify = require('./server')();

test('test', () => {
  fastify.inject(
    {
      method: 'GET',
      url: '/test',
    },
    response => {
      console.log(err);
      console.log(response.statusCode);
    }
  );
  fastify.close();
});

