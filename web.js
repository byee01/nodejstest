var express = require('express');

var app = express.createServer(express.logger())
  , io = require('socket.io').listen(app);

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
  console.log('Using ' + __dirname + '/public for static');
  app.register('.html', require('ejs'));
  console.log('Using ejs');
  app.set('view engine','html');
  app.set('views', __dirname + '/views');
  console.log('Using ' + __dirname + '/views for views');
});

app.get('/', function(request, response) {
  response.render('index.html', {title: 'hiii' });
});

io.configure(function() {
  io.set('transports', ['flashsocket', 'xhr-polling']);
});

app.listen(5000);

/* Socket IO Server */

io.sockets.on('connection', function(socket) {
  socket.on('hi', function(msg) {
    socket.emit('message', msg);
  });
});
