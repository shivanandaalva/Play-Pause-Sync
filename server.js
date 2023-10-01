var express = require('express');
var app = express();
// const server = require('http').Server(app);
const server = require('http');
var path = require('path');
var cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(3000);


const Server = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('mydata1', ()=>{
      console.log("playing");
      socket.broadcast.emit('event1');
    });

    socket.on('mydata2', ()=>{
      console.log("pausing");
      socket.broadcast.emit('event2');
    });

  });



