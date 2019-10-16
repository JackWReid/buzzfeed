const qs = require('qs');
const fetch = require('node-fetch');
const NpmClient = require('npm-registry-client');
const GitHubApi = require('github');
const log = require('simple-node-logger').createSimpleLogger();

const config = require('./config');

const npm = new NpmClient();
const github = new GitHubApi();

const gitHubAPI = {
  authenticate: () => github.authenticate({
    type: 'token',
    token: config.GH_TOKEN,
  }),

  async getMonoContent(path, branch = 'master') {
    log.info('upstream: github ', path);
    this.authenticate();
    return github.repos.getContent({
      owner: 'buzzfeed',
      repo: 'mono',
      ref: branch,
      path,
    });
  },
};

const slackAPI = {
  async getUserPresence(id) {
    log.info('upstream: slack ', id);
    return fetch(`https://slack.com/api/users.getPresence/?${qs.stringify({
      token: config.SLACK_TOKEN,
      user: id,
    })}`)
      .then(response => response.json());
  },

  async completePublishRequest(item) {
    log.info('upstream: slack ', item.response_url);
    return fetch(`${item.response_url}/?${qs.stringify({
      token: config.SLACK_TOKEN,
    })}`, {
      method: 'POST',
      body: JSON.stringify({
        text: `@${item.username} has published \`${item.version}\`. Go get it ✨`,
      }),
    })
      .then(response => response.json());
  },
};

const npmAPI = {
  async getRepo() {
    const params = {
      auth: {
        token: config.NPM_TOKEN,
        alwaysAuth: true,
      },
    };

    return new Promise((resolve, reject) => {
      npm.get('https://registry.npmjs.org/@buzzfeed%2fbuzzblocks', params, (error, data, raw, res) => {
        if (error) {
          reject(error);
        }

        return resolve(data);
      });
    });
  },
};

module.exports = {
  github: gitHubAPI,
  slack: slackAPI,
  npm: npmAPI,
};
