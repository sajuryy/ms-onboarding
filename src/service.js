const Mservice = require('@microfleet/core');

const config = require('./config');

module.exports = class Onboarding extends Mservice {

  constructor() {
    super(config)
  };

};
