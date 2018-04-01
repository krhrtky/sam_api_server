
test('test', () => {
  const fastify = require('../server')();
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

