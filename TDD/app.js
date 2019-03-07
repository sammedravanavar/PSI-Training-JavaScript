(function (){
    function add(a,b){
        if(typeof a == 'number' && typeof b=='number')
            return a+b;
        return "pass only numbers"
    }
    
    return {
        window : add
    }
})()