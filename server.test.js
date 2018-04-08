let fastify;
(async() => {
  fastify = await (await require('./server'))();
})();

test('test', () => {
  console.log(console);
  console.log(fastify);
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

