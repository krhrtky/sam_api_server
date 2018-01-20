'use strict';

module.exports = {
  BASE_RESPONSE: {
    response: {
      200: {
        type: 'object',
        properties: {
          result: { type: 'boolean' },
          message: { type: ['string', 'null'] },
        },
      },
    },
  },
  PARTICIPANTS_RESPONSE: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            purpose: { type: 'string' },
            isEntry: { type: 'boolean' },
          },
        },
      },
    },
  },
};
