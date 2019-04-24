var User =  (function () {
    
    function User() {
        this.name = "kiran";
        this.age = "28";
    }
    User.prototype.tested = function () {
        console.log("I am good");
    };
    return User;
}()

);
var u = new User();
