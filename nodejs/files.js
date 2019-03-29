log = (a) => {
    console.log(a);
}
var fs = require('fs');
// log(fs)
fs.rmdir('./new',()=>{

})
fs.exists('./new',(result)=>{
    if(result){
        log(result)
    }else{
        log(result)
        fs.mkdir('./new',(err)=>{
            if(err){
                log(err)
            }
            else{
                log('I m created')
            }
        })
    }
})
fs.exists('./new',(result)=>{log('a'+result)})
log('me first')

let file = fs.createWriteStream('./jumbo.txt')
for(let i=0;i<1e6;i++){
    file.write('nonsense');
}
file.end()
