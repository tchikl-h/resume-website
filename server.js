const express = require('express');
const path = require('path');

const app = express()
var server = require('http').Server(app);

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', 8080);
});

exports.default = app;
