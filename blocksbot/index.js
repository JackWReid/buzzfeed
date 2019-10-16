const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const oauth = require('./oauth');
const buzzblocks = require('./buzzblocks');
const poll = require('./poll');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true,
}));

const PORT = 8080;

app.listen(PORT, () => console.log(`blocksbot listening on ${PORT}`));

app.get('/oauth', oauth);
app.post('/buzzblocks', buzzblocks);
app.use('/', express.static('static'));

poll();
