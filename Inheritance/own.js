var obj1 = new Object();
obj1.name="kiran";
var obj2  = new Object(obj1);

console.log(obj1.hasOwnProperty('name'));
console.log(obj1.hasOwnProperty('constructor'));
console.log(obj2.hasOwnProperty('name'));