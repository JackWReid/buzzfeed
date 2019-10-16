const request = require('request');
const config = require('./config');

function handler(req, res) {
  if (!req.query.code) {
    res.status(500);
    res.send({ Error: "Looks like we're not getting code." });
    console.log("Looks like we're not getting code.");
  } else {
    request({
      url: 'https://slack.com/api/oauth.access',
      qs: {
        code: req.query.code,
        client_id: config.SLACK_CLIENT_ID,
        client_secret: config.SLACK_CLIENT_SECRET,
      },
      method: 'GET',
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        res.json(JSON.parse(body));
      }
    });
  }
}

module.exports = handler;
