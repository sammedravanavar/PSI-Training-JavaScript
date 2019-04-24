function bookTicket(mode) {
    var discount = mode == 'flight' ? 10 :
        mode == 'cruise' ? 20 :
        mode == 'train' ? 30 : 0;
    var price = Math.floor((Math.random() * 1000) + 1);
    return {
        printTicket: function (source, destination) {
            return function () {
                console.log('I am 2nd level clsoure');
                console.log('Price' + price);
                console.log('Discounrt', discount);
                console.log('Source', source)
            }
        },
        printDiscount: function (source, destination) {
            console.log("Discount" + price * (discount / 100));
        }
    }
}

var flight = bookTicket('flight');
flight.printTicket('Hyd', 'Bang')();