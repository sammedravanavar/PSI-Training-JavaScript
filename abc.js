// var user = new Array
// console.log(user instanceof Array)
// console.log(Array.isPrototypeOf(Object))
// console.log(Object.prototype.isPrototypeOf)

function f1(){}
function f2(){}
function f3(){}
f1.prototype.print = "hi"
// console.log(f1.prototype)
f3.prototype = Object.create(f1.prototype)
f1.prototype.print2 = "hello"
// console.log(f3.prototype)
var ins = new f3()
// console.log(ins.print)
// console.log(ins.print2)
var ins2 = new f1();
// console.log(f3.prototype.isPrototypeOf(ins))
// console.log(f1.prototype.isPrototypeOf(f3.prototype))
// console.log(f1.prototype.isPrototypeOf(ins2))
// console.log(f3.prototype.isPrototypeOf(ins2))
// console.log(Object.prototype.isPrototypeOf(String))
// console.log(ins instanceof f1)
// console.log(typeof f1.prototype)
// console.log(typeof ins)

var obj1 = new Object();
obj1.name = 'kieran'
var obj2 = new Object(obj1)
obj1.name = 'kieran'

console.log(obj1.hasOwnProperty('name'))
console.log(obj1.hasOwnProperty('constructor'))
console.log(Object.prototype.hasOwnProperty('constructor'))
console.log(Object.prototype.hasOwnProperty('name'))
console.log(obj2.hasOwnProperty('name'))