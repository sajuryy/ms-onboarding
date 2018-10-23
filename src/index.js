const Service = require('./service')

const service = new Service()

service.connect().asCallback(err => {
  if (err) {
    service.log.fatal('service crashed', err)
    throw err
  }
  service.log.info('service started');
});
