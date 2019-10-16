const versions = require('../services/versions');
const manifest = require('../services/manifest');

async function version(req, res, command) {
  const [, branch] = command;

  const latestNpmVersion = await manifest.getLatestVersion();
  const buzzblocksVersion = await versions.getBuzzblocksVersion(branch);
  const consumerVersions = await versions.getConsumerVersions(branch);

  return res.json({
    response_type: 'in_channel',
    text: `In \`${branch ||
      'master'}\`, buzzblocks is currently at \`${buzzblocksVersion}\`\nThe latest \`npm\` published version is \`${latestNpmVersion}\``,
    attachments: consumerVersions.map(app => ({
      mrkdwn_in: ['text'],
      text: `*${app.name}*: \`${app.version}\``
    }))
  });
}

module.exports = version;
