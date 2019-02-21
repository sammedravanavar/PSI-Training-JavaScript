function first(){
    var x=10;
    function second(){
        console.log(x);
    }
    // x=30;
    x++;
    console.log(x);
    return second
}
first()
var exec = first();
first()
exec()
