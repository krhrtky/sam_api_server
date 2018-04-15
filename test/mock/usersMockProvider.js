'use strict';
module.exports = {
  prepare: () => undefined,
  register: async () => ({
    id: '0000001',
    user: {
      mail: 'john.hoe@test.jp',
      name: 'John Doe',
    },
  }),
  entry: async () => ({
    id: '0000001',
    user: {
      mail: 'john.hoe@test.jp',
      name: 'John Doe',
    },
  }),
  update: async () => ({
    id: '0000001',
    purpose: 'STUDY',
  }),
  check: async () => ({
    id: '0000001',
    user: {
      mail: 'john.hoe@test.jp',
    },
  }),
  fetchUsersByDate: async () => ({
    name: 'John Doe',
    purpose: 'STUDY',
    isEntry: true,
  }),
};
