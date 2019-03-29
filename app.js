const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const myRespose = require('./data')
const rp = require('request-promise')


app.use(exp.static('./'))
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile('walmart.html', {
        root: path.join(__dirname, './')
    })
});
app.post('/api/search',(req,res)=>{
    // console.log(req.body);
    var url = "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query="+req.body.data;
    console.log(url);
    rp(url)
    .then( resp => {
        console.log(resp)
        res.json(JSON.parse(resp))
    })
    .catch(function (err) {
        // Crawling failed...
    })
    // res.json({
    //     data: myRespose
    // })
})
app.listen(3000)