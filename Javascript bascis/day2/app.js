function hello(){
    var globalVariable='k2';
    this.myname='';
 
 
    this.fulllname = new function(){
        this.myname='Ravi';
        console.log('inside the function');
        console.log(globalVariable+this.myname);
    }
}
var x =new hello();
x.fulllname.myname ="Johny";
x.myname='kiran';
console.log(x.fulllname);
console.log(x.myname)
