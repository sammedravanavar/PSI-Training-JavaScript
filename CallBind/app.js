var obj = {name:"kiran"};
var student ={name:"ravi"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

greeting.call(obj,"test1","test2",'test3');
greeting.call(student,"test1","test2",'test3');


greeting.apply(obj,["kiran","PVS","TEST"]);

let x =greeting.bind(obj);
console.log(x("kirabm","pvs","122"));

//console.log(greeting.call(obj,"test","test1","test2));