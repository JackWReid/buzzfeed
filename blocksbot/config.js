const devConfig = require('dotenv').config();

function getConfig() {
  if (process.env.NODE_ENV === 'production') {
    return process.env;
  }

  return devConfig.parsed;
}

module.exports = getConfig();
