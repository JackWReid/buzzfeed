function help(req, res, command) {
  return res.json({
    response_type: 'ephemeral',
    text:
      "Hey 👋. I'm here to help you work with buzzblocks. Here's what I can do. For more info check out the <https://buzzblocks.prod.buzzfeed.io/|docs>",
    attachments: [
      {
        mrkdwn_in: ['text'],
        text:
          '`/buzzblocks help` Information about all the skills blocksbot has (visible only to you).'
      },
      {
        mrkdwn_in: ['text'],
        text:
          '`/buzzblocks version` Get the latest published version of buzzblocks in master. Also get the version numbers that each xPager is pinned to in master.'
      },
      {
        mrkdwn_in: ['text'],
        text:
          '`/buzzblocks version <ref>` The same as above but getting the versions in a particular branch or commit.'
      },
      {
        mrkdwn_in: ['text'],
        text:
          '`/buzzblocks components` Get a list of buzzblocks components currently in master (visible only to you).'
      },
      {
        mrkdwn_in: ['text'],
        text:
          '`/buzzblocks component <name>` Get information about a component, including a description, API information, and links to live examples.'
      }
    ]
  });
}

module.exports = help;
