'use strict';

module.exports = {
  ACCESS_RECORD: {
    require: {
      date: {
        from: { type: 'date' },
        to: { type: 'date' }
      }
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
          }
        }
      },
      500: {
        type: 'object',
        properties: {
          error: {
            message: { type: 'string' }
          }
        }
      }
    }
  },
  LAST_ACCESS_RECORD: {
    responce: {
      200: {
        type: 'object',
        mail: { type: 'string' },
        name: { type: 'string' },
        purpose: { type: 'string' },
       isEntry: {type: 'boolean'},
        workspace: {
          entry:{type:'long'},
          exit: {type: 'long'}
        }
      },
      500: {
        type: 'object',
        properties: {
          error: {
            message: {type: 'string'}
          }
        }
      }
    }
  },
  AGGREGATE: {
    responce: {
      200: {
        type: 'object',
        date: 'date'
        purpose :{
          work: 'integer',
          study: 'integer',
          meetUp: 'integer',
          circle: 'integer'
        }
      },
      500: {
        type: 'object',
        properties: {
          error: {
            message: {type: 'string'}
          }
        }
      }
    }
  }
}
}
