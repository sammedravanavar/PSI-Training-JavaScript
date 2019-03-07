//modular pattern
//provide interface hide functionality
var x = (function(){
    console.log("how r u")
    function httpRequest(){
        console.log('request')
    }
    return {
        httpRequest: function(){
            httpRequest()
        }
    }
})()
console.log(typeof x)
x.httpRequest()

//singleton design
// eg: redux
//single strore single instance


//observer design
//a middle server(observer) notify to the subscribers


//vijendra, michael packiyaraj