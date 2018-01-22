'use strict';

module.exports = {
  SCAN_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['cardId'],
        properties: {
          cardId: { type: 'string' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
      },
    },
  },
  CHECK_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['cardId'],
        properties: {
          cardId: { type: 'string' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            //message: { type: ['string', 'null'] },
          },
        },
      },
    },
  },
  REGISTOR_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id', 'cardId'],
        properties: {
          id: { type: 'string' },
          cardId: { type: 'string' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            //message: { type: ['string', 'null'] },
          },
        },
      },
    },
  },
  UPDATE_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id', 'cardId'],
        properties: {
          id: { type: 'string' },
          cardId: { type: 'string' },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              result: { type: 'boolean' },
              //message: { type: ['string', 'null'] },
            },
          },
        },
      },
    },
  },
  PARTICIPANTS_SCHEMA: {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            //message: { type: ['string', 'null'] },
          },
        },
      },
    },
  },
};
