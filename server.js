const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/remote-control', function (req, res) {
    res.sendFile(__dirname + '/remote-control.html');
});

io.on('connection', socket => {
    // socket.broadcast.emit('connected');

    socket.on('buttonPress', floorId => {
        io.emit('scrollToFloor', floorId);
    });

    // socket.on('disconnect', () => {
    //     console.log('client disconnected');
    // });
});

http.listen(port, () => {
    console.log('listening on *:3000');
});
