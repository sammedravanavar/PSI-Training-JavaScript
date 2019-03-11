function Factory() {
    this.createVehicle = function (type){
        var vehicle;
    }
    function car(){
        this.numberOfDoors = 4;
        this.numberOfTyres = 4;
        this.windows = true;
    }
    function bike(){
        this.engineCC = 150;
    }
}

var x = new Factory()