(function(){
    'use strict';
    function * gen(){
        console.log('this first')
        yield [1,3,4]
        console.log('i am next')
        yield 'ok bro'
        yield 'thnks'
    }
    const genObj = gen()
    console.log(genObj.next().value)
    console.log(genObj.next().value)
    console.log(genObj.next().value)
})();

(function(){
    'use strict';
    function * powerSeries(number,power){
        let base = 2;
        // while(true){
        //     yield Math.pow(base,power);
        //     console.log('o')
        //     base++;
        // }
        for(var i=1; i<10; i++){
            yield Math.pow(++base,power)
            console.log(i)
        }
    }
    let powers = powerSeries(2,4)
    for(var i=1;i<10;i++)
    console.log(powers.next().value)
    // console.log(powers.next().value)
})()