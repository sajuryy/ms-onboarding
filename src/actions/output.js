
//  curl localhost:3000/mservice/output

const fs = require('fs');

module.exports = async function () {

  const result = await this.knex.select().from('storage').map(data => data.value) || 'empty';

  return result;

};

module.exports.transports = ['http'];
