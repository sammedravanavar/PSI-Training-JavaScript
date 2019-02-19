'use strict';
var ref = function(){
    var obj = [{"nam":"","pwd":"","email":"","gender":"","agree":""}]
    obj.nam=document.getElementById('nam');
    obj.pwd=document.getElementById('password');
    obj.email=document.getElementById('email');
    obj.gender=document.getElementById('gender');
    obj.agree=document.getElementById('agree');
    return obj;
}
console.log(ref())