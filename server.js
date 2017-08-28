// https://socket.io/get-started/chat/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var EditorSocketIOServer = require('ot/lib/editor-socketio-server');
var server = new EditorSocketIOServer("", [], 1);

io.on('connection', function(socket){
  server.addClient(socket);
});
