const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');

app.use(exp.static('./'))
app.get('/', (req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
});
app.post('/api/search',(req,res)=>{
    console.log(req.body);
    res.json({
        data: []
    })
})
app.listen(3000)