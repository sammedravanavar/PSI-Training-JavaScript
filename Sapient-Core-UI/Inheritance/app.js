function f1(){}
function f2(){}
function f3(){}

f3.prototype = Object.create(f1.prototype);
f1.prototype.print = "Hello";
var ins = new f3();
var ins2 = new f1();
console.log(f3.prototype.isPrototypeOf(ins));
console.log(f1.prototype.isPrototypeOf(ins));
console.log(f3.prototype.isPrototypeOf(ins2));