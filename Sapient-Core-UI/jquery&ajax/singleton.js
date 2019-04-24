var printer = (function () {

    var printerInstance;
    function create() {
        function print() {
            // underlying printer mechanics
        }
        function turnOn() {
            // warm up
            // check for paper
        }
        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn
        };
    }
    //end of create function
    // function Singleton() {
    //     if (!printerInstance) {
    //         printerInstance = intialize();
    //     }
    // };
    return {
        getInstance: function () {
            if (!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };
})();