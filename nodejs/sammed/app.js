const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');

app.use(exp.static('./'))

app.get('/', (req,res) => {
    res.sendFile('q1.html', {
        root: path.join(__dirname, './')
    })

    let file = fs.createWriteStream('./jumbo.txt')
    for(let i=0;i<1e6;i++){
        file.write('nonsensenonsensenonsense\n');
    }
    file.end()
});

app.get('/getStream',(req,res)=>{
    console.log('called')
    let src = fs.createReadStream('./jumbo.txt');
    src.pipe(res)
})

app.listen(3000)