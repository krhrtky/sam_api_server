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
        '2xx': {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
        '4xx': {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' },
              },
            },
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
        '2xx': {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
        '4xx': {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' },
              },
            },
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
        '2xx': {
          type: 'object',
          properties: {
            result: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
        '4xx': {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' },
              },
            },
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
          '2xx': {
            type: 'object',
            properties: {
              result: { type: 'boolean' },
              message: { type: 'string' },
            },
            '4xx': {
              type: 'object',
              properties: {
                error: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  PARTICIPANTS_SCHEMA: {
    schema: {
      response: {
        '2xx': {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              porpose: { type: 'string' },
              isEntry: { type: 'boolean' },
            },
          },
        },
        '4xx': {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
};
