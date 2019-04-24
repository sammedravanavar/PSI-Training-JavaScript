// var obj = {a:10};
// var obj2 = obj;
// obj2.a = 20;
// obj.a =30;
// console.log(obj.a);
// console.log(obj2.a);

// //immediate functions - self executing
// (function(){
// console.log("self")
// })();

// (function(){
//     'use strict';
//     var student;
//     function Person(){
//         var x=10;
//         this.firstName = "adad";
//     }
//     // Person()
//     student = new Person();
    
//     console.log(student.firstName)
//     console.log(typeof Person)
// })()
// 'use strict';
var student;
function Person(){
    var x=10;
    this.firstName = "adad";
    // this.test()
}
Person()