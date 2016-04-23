var express       = require('express');
var app           = express();
var server        = require('http').createServer(app);
var bodyParser    = require('body-parser');

server.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('hello there!');
});

console.log('server listening on port', 3000);
