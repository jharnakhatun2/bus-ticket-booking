// create element
const element = tag => document.createElement(tag);
// get id
const getId = id => document.getElementById(id);
// get all class
const getAllClass = selector => document.querySelectorAll(selector);

//calculate total price
const totalPriceCalculation = (seatQuantity) =>{
    return seatQuantity * 550;
}

//Coupon discount calculation
const discountCouponCalculation = (originalPrice, discountPercentage) =>{
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountPrice = originalPrice - discountAmount;
    return {discountPrice, discountAmount};
}
