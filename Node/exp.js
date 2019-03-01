//module pattern
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



//observer design
