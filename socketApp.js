var exp = require('express')
var app = exp()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const path = require('path')

app.use(exp.static('./'))
app.get('/', (req,res) => {
    res.sendFile('exp.html', {
        root: path.join(__dirname, './')
    })
});

io.on('connection', (socket) => {
    // socket.emit('news', { hello: 'world'});
    // socket.on('my other event', function (data) {
    //     console.log(data)
    // })
    socket.on('USER_JOIN',(data)=>{
        io.emit('USER_CONNECTED',{id: socket.id, userName: data})
    })
    // socket.emit('USER_CONNECTED',socket.id)
    socket.on('disconnect', ()=>{
        console.log(socket.id);
        socket.emit('USER_DISCONNECTED',socket.id)
    })

    // socket.on('USER_ENTERED',(data)=>{
    //     console.log(data);
    // })
})



server.listen(3005)