(function(){
    'use strict'

    var fName = document.getElementById('fName')
    var lName = document.getElementById('lName')
    var age = document.getElementById('age')
    
    var testName = function(e){
        var regex = /^[a-zA-Z ]+$/
        validateInput(e,this.value,regex)
    }

    function validateInput(e,value,regex){
        if(!regex.test(e.key)){
            e.preventDefault()
        }
    }

    fName.addEventListener('keydown',testName)
    lName.addEventListener('keydown',testName)

    function customAlert(msg, duration) {
        var styler = document.createElement("div");
        styler.className = "container alert alert-danger"
        // styler.setAttribute("style", "border: solid 3px black; width:auto; height:auto; top:90%; left:40%; background-color:#ff0000; color:Silver");
        styler.innerHTML = msg
        setTimeout(function () {
            styler.remove(styler);
        }, duration);
        document.body.appendChild(styler);
    }
    
    function validate(){
        if(fName.value.length>20){
            customAlert("First name length cannot be more than 20",5000)
        }
        if(lName.value.length>20){
            customAlert("Last name length cannot be more than 20",5000)
        }
        if(age.value<18 || age.value>99){
            customAlert("Age should not be more than 99 or less than 18",5000)
        }
    }
    var submit = document.getElementById('submit')
    submit.addEventListener('click',validate)
})()