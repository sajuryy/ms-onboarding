/*
curl --header "Content-Type: application/json" \
--request POST \
--data '{"value":"random-data"}' \
localhost:3000/mservice/input
*/

const fs = require('fs');

module.exports = async function ({ params, transport }) {
  console.log(params);
  const { value } = params;
  switch (transport) {
    case 'http':
      await this.knex('storage').insert({ value });
      break;

  };

  return {
    transport,
    success: true,
    value
  };
};

module.exports.transports = ['http', 'amqp'];
