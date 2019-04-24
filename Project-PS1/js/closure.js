// (function(){
    // "use strict"
    function bookTicket(mode){
        var discount = mode == 'flight' ? 10 :
        mode == 'cruise' ? 20 : mode == 'train' ? 30 : 0 ;
        return {printTicket: function(source, destination){
            var price = Math.ceil((Math.random()*1000))
            console.log('Source: '+source)
            console.log('Destination: '+destination)
            console.log('Price: '+price)
            console.log('Discount: '+Math.ceil(price*(discount/100)));
            // console.log("/n")
        },
        printDiscount: function(source,destination){
            console.log("Discount"+Math.ceil(price*(discout/100)))
        }}
    }
    
    var flight = bookTicket('flight')
    var train= bookTicket('train')
    var cruise = bookTicket('cruise')
    
    // flight('Bangalore','Hyderabad')
    // train('Hyderabad','Chennai')
    // cruise('Chennai','Andaman')
    flight.printTicket('Bangalore','Hyderabad')
    
// })
