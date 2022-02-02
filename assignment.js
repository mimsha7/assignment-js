function kilometerToMeter(km){
    const fact = 1000; //1 km = 1000 meter
    var result = fact *  km;

    return result;
}

function budgetCalculator(product1, product2, product3){
    
    var watch = product1 * 50;
        
    var phone = product2 * 100;
        
    var laptop = product3 * 500;

    return watch+phone+laptop;
        
}

function hotelCost(days){

    var hotelRent = 0;

    if (days <= 10) {
        hotelRent = days * 100;
    }
    else if ( days <= 20) {
       var firstHalf = 10 * 100;
       var remaining = days - 10;
       var secondHalf = remaining * 80;
       hotelRent = firstHalf + secondHalf;
    }
    else {
        var firstHalf = 10 * 100;
        var secondHalf = 10 * 80;
        var remaining = days - 20;
        var lastHalf = remaining * 50;
        hotelRent = firstHalf + secondHalf + lastHalf;
    }
    return hotelRent;
}

function megaFriend(value){
    
    var maxFreind = value[0];

    for (var i = 0; i < value.length; i++){
        var friend = value[i];
        if(friend > maxFreind){
            maxFreind = friend;
        }             
    }
    return maxFreind;
}





