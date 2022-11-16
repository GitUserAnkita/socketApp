var express = require('express')
var app = express()
var http = require('http').createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", `*`);
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-JWT-Token");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, PATCH, OPTIONS");
    next();
});

var STATIC_CHANNELS = [{
    name: 'testuser 1',
    participants: 0,
    id: 1,
    sockets: []
}, {
    name: 'testuser 2',
    participants: 0,
    id: 2,
    sockets: []
}, {
    name: 'testuser 3',
    participants: 0,
    id: 3,
    sockets: []
}, {
    name: 'testuser 4',
    participants: 0,
    id: 4,
    sockets: []
}];
http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
    console.log('new client connected');
    // socket.emit('connection', null);
    // socket.on('channel-join', id => {
    //     console.log('channel join', id);
    //     STATIC_CHANNELS.forEach(c => {
    //         if (c.id === id) {
    //             if (c.sockets.indexOf(socket.id) == (-1)) {
    //                 c.sockets.push(socket.id);
    //                 c.participants++;
    //                 io.emit('channel', c);
    //             }
    //         } else {
    //             let index = c.sockets.indexOf(socket.id);
    //             if (index != (-1)) {
    //                 c.sockets.splice(index, 1);
    //                 c.participants--;
    //                 io.emit('channel', c);
    //             }
    //         }
    //     });
    //     return id;
    // });
    // socket.on('send-message', message => {
    //     io.emit('message', message);
    // });
    // socket.on('disconnect', () => {
    //     STATIC_CHANNELS.forEach(c => {
    //         let index = c.sockets.indexOf(socket.id);
    //         if (index != (-1)) {
    //             c.sockets.splice(index, 1);
    //             c.participants--;
    //             io.emit('channel', c);
    //         }
    //     });
    // });
});
/**
 * @description This methos retirves the static channels
 */

 const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };
app.get('/getChannels', (req, res) => {
    res.json({
        channels: STATIC_CHANNELS
    })
});



