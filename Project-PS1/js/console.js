'use strict'
// init;
init();
var init = function(){
    // console.log("ji")
    console.log(getFullName('1','1'));
}

var getFullName = function(fName,lName){
    console.log(4)
    return fName+lName;
}
init();
function init(){
    // console.log("ji")
    console.log(getFullName('2','2'));
}

function getFullName(fName,lName){
    console.log(3)
    return fName+lName;
}
init();