const { npm } = require('../api');

const manifest = {
  state: {
    manifest: null
  },

  async updateManifest() {
    const raw = await npm.getRepo();
    this.state.manifest = {
      name: raw.name,
      description: raw.description,
      latest: raw['dist-tags'].latest,
      versions: Object.keys(raw.versions).map(version => ({
        number: version,
        publisher: raw.versions[version].author.name,
        time: raw.time[version]
      }))
    };
  },

  async getLatestVersion() {
    return this.state.manifest.latest;
  }
};

module.exports = manifest;
