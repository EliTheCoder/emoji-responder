var express       = require('express');
var app           = express();
var server        = require('http').createServer(app);
var bodyParser    = require('body-parser');

server.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('<center><h1 style="font-family: Helvetica;">Emoji Responder Server is Running</h1></center>');
});

app.post('/new-email', function(req, res){
  if (req.body.message_data.bodies[0].content == "sad" || req.body.message_data.bodies[0].content == "happy") {
    console.log("Received Message: " + req.body.message_data.bodies[0].content)
  }
});

console.log('Listening on Port: ', 3000);
console.log('Local Hosting Proccess is Complete.')


