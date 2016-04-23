var express       = require('express');
var app           = express();
var server        = require('http').createServer(app);

server.listen(3000);

app.get('/', function(req, res){
  res.send('hello there!');
});

console.log('server listening on port', 3000);
