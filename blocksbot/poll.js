const versions = require('./services/versions');
const components = require('./services/components');
const manifest = require('./services/manifest');

function checkVersions() {
  versions.updateBuzzblocksVersion();
  versions.updateConsumerVersions();
  manifest.updateManifest();
}

function checkComponents() {
  components.updateCurrentComponents();
}

function poll() {
  checkVersions();
  checkComponents();
  setInterval(checkVersions, 60 * 1000);
  setInterval(checkComponents, 60 * 1000 * 5);
}

module.exports = poll;
