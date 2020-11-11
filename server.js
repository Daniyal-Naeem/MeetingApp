/*jshint esversion: 6 */

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');
 
 

const path = require('path');

 
const peerServer = ExpressPeerServer(server, {
  debug: true
});
const { v4: uuidV4 } = require('uuid')

const connectDB = require('./config/db');

//initial middleware
app.use(express.json({extended : false}));

// Connect Database
connectDB();

// Define routes
app.use ("/api/users" , require("./routes/users"));
app.use ("/api/auth" , require("./routes/auth"));
app.use ("/api/crud" , require("./routes/crud"));

app.use('/peerjs', peerServer);

app.set('view engine', 'ejs')
app.use(express.static('public'))
 
app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {

    socket.join(roomId)

    socket.to(roomId).broadcast.emit('user-connected', userId);
    // messages
    socket.on('message', (message) => {
      
      //send message to the same room
      io.to(roomId).emit('createMessage', message) 
  }); 

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

server.listen(process.env.PORT||3030)




