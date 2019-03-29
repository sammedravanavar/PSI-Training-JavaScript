// for(i=0;i<1000000000;i++){}
//     console.log(i)
// for(i=0;i<1000000000;i++){}
//     console.log(i)
// const http = require('http')
// var counter = 0;
// http.createServer((req,res)=>{
//     counter++;
//     setTimeout(function(){
//         for(i=0;i<1000000000;i++){}
//             console.log(i)
//         res.end('<h1>Welcome to nodejs</h1>')
//     },3000)
//     console.log(counter)
// }).listen(4000)
require('domain')
var http = require('http')
var server = http.createServer();
server.on('request',(req,res)=>{
    res.end('<h1>Kaise ho?</h1>')
})
server.listen(4000);
console.log(server.eventNames())
console.log(process.env.ENV_MODE)

console.log("start");
process.nextTick(()=>{
    console.log('next')
})
console.log('scheduled')
console.log(process.platform)