function calculateDiscount(orginalPrice, discountpercentage) {

    var discountprice;
    var discount = discountpercentage;
    discountprice = (orginalPrice / 100) * discount;
    var result = orginalPrice - discountprice;
    return result;
}

console.log(calculateDiscount(70, 20));
console.log(calculateDiscount(60, 10));
console.log(calculateDiscount(50, 30));
console.log(calculateDiscount(70, 40));
console.log(calculateDiscount(30, 20));
console.log(calculateDiscount(40, 20));