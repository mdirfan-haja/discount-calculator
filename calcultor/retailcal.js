function retailcal(price, quantity) {

    var productprice;
    var product = quantity;
    productprice = (price + 0) * product;

    var checkout = productprice.toFixed(2);


    return checkout;
}

console.log(retailcal(70.2, 1));
console.log(retailcal(55, 2));
console.log(retailcal(33, 2));
console.log(retailcal(22, 2));
console.log(retailcal(11, 2));
console.log(retailcal(9, 1));