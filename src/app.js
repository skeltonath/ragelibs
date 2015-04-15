var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var server = app.listen(4000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

  setInterval(function() {
    console.log('still alive...')
  }, 1000 * 30);
});
