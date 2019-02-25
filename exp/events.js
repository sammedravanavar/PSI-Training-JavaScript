(function(){
    'use strict';
    document.getElementById('btn').addEventListener('click',function(e){
        console.log(e);
        console.log(this)
    })
    document.getElementById('myText').addEventListener('keypress',(e) =>{
        var myReg = /^[A-Z]+$/i
        // if(!myReg.test(e.key)){
        //     e.preventDefault()
        // }
        validateInput(e,myReg)
        // console.log(e.key);
        // console.log(this)
        // e.preventDefault()
        // e.key
    })
    function validateInput(e,regex){
        if(!regex.test(e.key)){
            e.preventDefault()
        }
    }
})()

