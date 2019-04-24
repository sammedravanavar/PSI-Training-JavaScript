var exp = require('express')
var app = exp()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const path = require('path')

app.use(exp.static('./'))
app.get('/', (req,res) => {
    res.sendFile('q2.html', {
        root: path.join(__dirname, './')
    })
});

io.on('connection', (socket) => {
    socket.on('USER_JOIN',(data)=>{
        io.emit('USER_CONNECTED',{id: socket.id, userName: data})
    })
    socket.on('disconnect', ()=>{
        console.log(socket.id);
        socket.emit('USER_DISCONNECTED',socket.id)
    })
})

server.listen(3005)