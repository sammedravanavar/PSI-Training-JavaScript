var Animal = {
    do : 'live'
}
var Rabbit = {
    do: 'run'
}

// Rabbit.__proto__ = Animal
// Animal.__proto__ = Rabbit
// console.log(Animal.__proto__.__proto__)
// console.log(Rabbit.__proto__.__proto__.__proto__)

String.__proto__ = true
// console.log(String.__proto__.__proto__.__proto__)
// console.log(String.__proto__.__proto__)
// console.log(String.__proto__)
// // Animal.__proto__ = null
// console.log(String)

var admin = {
    name:"John",
    // c:'c',
set full(v){
    // console.log(v);
    // console.log(arguments["John"]);
    console.log(this.name);
    [this.name] = v;
    console.log(this.name)
},
get full(){
    return this.name
}
}
let user = {
    __proto__: admin
}
user.full = ["abc","efg"]
console.log(user.full)

var newObj = new Object();
console.log(newObj.prototype)