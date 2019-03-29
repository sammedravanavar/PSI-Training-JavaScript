const http = require('http')
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occured!');
    // console.log(this)
})
myEmitter.emit('event')

var server = http.createServer();
server.on('request',(req,res)=>{
    console.log(this)
    res.end('<h1>hey!!</h1>')
})
server.listen(4000)

