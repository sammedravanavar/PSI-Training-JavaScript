(function(){
    // 'use strict'
    let obj = {name:'ert'}
    let name = 'sf'
    function greeting(a,b,c){
        // this.name = 'op'
        return "welcome "+this.name+" to "+a+" "+b+" in "+c
    }
    console.log("1 "+greeting("test1","test2","test3"))
    console.log("2 "+greeting.call(obj,"test1","test2","test3"))
    console.log("3 "+greeting.call(obj,"test1","test2"))
    console.log("4 "+greeting.call(obj,"test1","test2","test3","test4"))
    // console.log(greeting.call(obj,["test1","test2","test3"]))
    console.log(greeting.apply(obj,["test1","test2","test3"]))
    console.log(obj.name)
    console.log(name)
    console.log(greeting.bind(obj,"test1","test2","test3")())
    console.log(greeting.bind(obj)("test1","test2","test3"))
})()