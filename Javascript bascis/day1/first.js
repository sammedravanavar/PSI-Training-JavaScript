function outer() {
    var x = 10;
    // return function () {
    //     console.log(x);
    // };
    return function(){}
}

var exec = outer();
exec();