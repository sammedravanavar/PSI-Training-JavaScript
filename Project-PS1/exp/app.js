// (function(){
//     "use strict";
    // var x = document.getElementById("i");
    // console.log(x);
    // var y = document.getElementsByName("uname");
    // console.log(y)

    function hello(){
        var myName = 'k2';
        this.myName = "";
        // console.log(myName)
        // this.fullName = new function(){
        //     this.myName = "Ravi"
        //     console.log(myName);
        //     console.log(myName + this.myName)
        // }
        this.newName = (function(){
            this.myName = "Ravi"
            console.log(myName);
            console.log(myName + this.myName)
        })()
    }
    var x = new hello()
    // x.myName = "kiran"
    // console.log(hello)
    console.log(x.newName)
    // console.log(x.myName)
// })()

    // new function(){
    //     console.log('new')
    // }