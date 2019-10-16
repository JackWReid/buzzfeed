const atob = require('atob');
const { github } = require('../api');

const xPagers = [
  {
    name: 'bpager',
    version: null
  },
  {
    name: 'feedpager',
    version: null
  },
  {
    name: 'tasty_pager',
    version: null
  }
];

const parseBuzzblocksVersion = obj =>
  JSON.parse(atob(obj.data.content)).version;

const parseConsumerVersion = obj => {
  const manifest = JSON.parse(atob(obj.data.content));
  return manifest.devDependencies['@buzzfeed/buzzblocks'];
};

const versions = {
  state: {
    buzzblocksVersion: null,
    consumerVersions: null
  },

  async updateBuzzblocksVersion() {
    return github
      .getMonoContent('/packages/frontend/buzzblocks/package.json')
      .then(response => {
        this.state.buzzblocksVersion = parseBuzzblocksVersion(response);
      });
  },

  async updateConsumerVersions() {
    return Promise.all(
      xPagers.map(app =>
        github.getMonoContent(`/${app.name}/package.json`).then(response => ({
          name: app.name,
          version: parseConsumerVersion(response)
        }))
      )
    )
      .then(consumers => {
        this.state.consumerVersions = consumers;
      })
      .catch(error => console.log(error));
  },

  async getBranchBuzzblocksVersion(branch) {
    return github
      .getMonoContent('/packages/frontend/buzzblocks/package.json', branch)
      .then(response => parseBuzzblocksVersion(response));
  },

  async getBranchConsumerVersions(branch) {
    return Promise.all(
      xPagers.map(app =>
        github
          .getMonoContent(`/${app.name}/package.json`, branch)
          .then(response => ({
            name: app.name,
            version: parseConsumerVersion(response)
          }))
      )
    );
  },

  async getBuzzblocksVersion(branch) {
    if (!branch) {
      return this.state.buzzblocksVersion;
    }

    return this.getBranchBuzzblocksVersion(branch);
  },

  async getConsumerVersions(branch) {
    if (!branch) {
      return this.state.consumerVersions;
    }

    return this.getBranchConsumerVersions(branch);
  }
};

module.exports = versions;
