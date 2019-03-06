class Student{
    constructor(a=10,b=20){
        this.firstname=a;
        this.lastname=b;
        this.age;
    }
    getFullName(){
        return this.firstname+this.lastname;
    }
}
let stu = new Student();

stu.firstname='kiran';
stu.lastname='PVS';
stu.age=20;
console.log(stu);



let m = new Map();
m.set("kiran","PVS");
m.set("x","y");


m.delete('kiran');

m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})




let s =new Set();
s.add('kiran');
s.add('kiran1');
s.add('kiran3');

var user ={name:'kiran',age:20,gender:'m'};
var {name,age}= {...user}
console.log(name);
console.log(age);















