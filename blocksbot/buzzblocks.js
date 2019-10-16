const log = require('simple-node-logger').createSimpleLogger();

const version = require('./skills/version');
const component = require('./skills/component');
const help = require('./skills/help');

function handler(req, res) {
  const command = req.body.text.split(' ');
  log.info(`/buzzblocks ${command[0]} ${command[1] || ''}`);

  if (command[0] === 'version') {
    return version(req, res, command);
  }

  if (
    command[0] === 'component' ||
    command[0] === 'components'
  ) {
    return component(req, res, command);
  }

  if (command[0] === 'help') {
    return help(req, res, command);
  }

  return res.send('Say what now? Try `/buzzblocks help`');
}

module.exports = handler;
