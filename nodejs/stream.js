var fs = require('fs');
var http = require('http');
var server = http.createServer((req,res)=>{
    // fs.readFile("./jumbo.txt",(err,data)=>{
    //     if(err){
    //         res.end(err)
    //     }
    //     else{
    //         res.end(data)
    //     }
    // })
    let src = fs.createReadStream('./jumbo.txt');
    src.pause();
        console.log('paused')
    src.resume();
    src.pipe(res)
}).listen(5000)

