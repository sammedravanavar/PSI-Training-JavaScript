console.log("Hello");
// window.alert("Hi");

var s = [{'a':5,'b':'a'},{'a':7,'b':9}];
console.log(typeof(s[0].b));
console.log(typeof(s));
console.log(JSON.stringify(s))

var f1 = function(a,b){
    console.log(a+b)
}

f1(6,'g')
f1(6, 7)
f1(['a','b'], ['c','d'])

var isNum = function(x){
    if (typeof x+'r' == 'number')
        return true;
    return false;
}
console.log(isNum(5));

for(i=0; i<=10; i++){
    document.write(i+" ");
}

document.write(i+" ");

var sum = function(){
    i = 8;
    document.getElementById('hi').innerHTML = 56;
}
console.log(i)

