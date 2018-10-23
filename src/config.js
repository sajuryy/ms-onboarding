const path = require('path')

module.exports = {
  plugins: ['validator', 'logger', 'router', 'http', 'amqp', 'knex'],
  validator: ['../schemas'],
  knex: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Labrador!@#123',
      database: 'user'
    }
  },
  router: {
    routes: {
      directory: path.resolve(__dirname, './actions'),
      transports: ['http', 'amqp']
    }
  },
  amqp: {
    router: {
      enabled: true
    },
    transport: {
      queue: 'onboarding-queue'
    }
  }
};
