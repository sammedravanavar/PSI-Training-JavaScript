(function(){
    'use strict';
    let a,b
    a=b=3;
    console.log(a+' '+b);
    (function(a){
        console.log(a)
    })(2)
    
})();

(function(){
    'use strict';
    let a = [1,2,3,4,5]
    // a.even(3)
    Array.prototype.even = function(a){
        let x = this[0]
        console.log(x)
        if(a%2) return false
            return true
    }
    let c = a.even(2)
    let b = new Array()
    console.log(b.even(5))
    console.log(c)
})();

(function(){
    'use strict';
    // var x=y=0
    let a = [1,2,3,4,5]
    console.log(a.even(9))
})();

(function(){
    'use strict'
    let a = [2,5,7,3,8,9]
    let b = a.filter(a => {
            return !(a%2)
        })
    let c = a.filter(a =>!(a%2))
    console.log(b)
    console.log(c)
    console.log(w)
    var w = 7
    console.log(v)
    let v= 8
    console.log(y)
    const y = 9
    const z = {x: 10}
    z.x = 5
    console.log(z)
})();