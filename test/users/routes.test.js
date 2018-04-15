
test('register return 200', async () => {
  const fastify = await (await require('../../server'))();
  fastify.inject(
    {
      method: 'POST',
      url: '/register',
      payload: {
        id: '0000002',
        user: {
          mail: 'john.hoe@test.jp',
          name: 'John Doe',
        },
      }
    },
    response => {
      const payload = JSON.parse(response.payload);

      expect(response.statusCode).toBe(200);
      expect(payload.id).toEqual(expect.stringMatching(/^[0-9]+$/));
      //expect(payload.mail).toEqual(expect.stringMatching(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/));
      expect(typeof payload.user.name).toBe('string');
    }
  );
  fastify.close();
});

