var domain = require('domain');
var dom = domain.create();
// try{
//     throw new Error()
// }
// catch(ex){
//     console.log(ex)
// }
dom.run(()=>{
    require('http').createServer((req,res)=>{
        handleRequest(req,res);
    }).listen(4000)
})
dom.on('error',(err)=>{
    console.log(`error ${err.message}`)
})
dom.exit()

const buf = Buffer.alloc(19)
console.log(buf)
const buf2 = Buffer.from('yahan se')
console.log(buf2)
console.log(buf2.toString())