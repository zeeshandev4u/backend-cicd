var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Backend World! with github actionns');
});
app.get('/api', function (req, res) {
  res.send('Hello API ');
});
app.listen(3000, function () {
  console.log('Example app listening on port: 3000');
});