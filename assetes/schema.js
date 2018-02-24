'use strict';

module.exports = {
  ENTRY_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id', 'purpose'],
        properties: {
          id: { type: 'string' },
          porpose: { type: 'string' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                isEntry: { type: 'boolean' }
              }
            }
          }
        },
        400: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              }
            }
          }
        }
      }
    }
  },
  CHECK_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          }
        },
        400: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              }
            }
          }
        }
      }
    }
  },
  REGISTOR_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id', 'user'],
        properties: {
          id: { type: 'string' },
          user: {
            type: 'object',
            properties: {
              mail: { type: 'string' },
              name: { type: 'string' }
            }
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                mail: { type: 'string' },
                name: { type: 'string' }
              }
            }
          }
        },
        400: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                mail: { type: 'string' },
                name: { type: 'string' }
              }
            },
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' }
              }
            }
          }
        }
      }
    }
  },
  UPDATE_SCHEMA: {
    schema: {
      body: {
        type: 'object',
        required: ['id', 'user'],
        properties: {
          id: { type: 'string' },
          user: {
            type: 'object',
            properties: {
              mail: { type: 'string' }
            }
          }
        },
        response: {
          200: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              user: {
                type: 'object',
                properties: {
                  mail: { type: 'string' }
                }
              }
            }
          },
          400: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              error: {
                type: 'object',
                properties: {
                  message: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  },
  USERS_SCHEMA: {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              purpose: { type: 'string' },
              isEntry: { type: 'boolean' }
            }
          }
        }
      }
    }
  }
};
