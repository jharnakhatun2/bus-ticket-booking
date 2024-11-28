// Select elements
const seatBtn = getAllClass('.seat');
const totalSeat = getId('totalSeat');
const seatCount = getId('seatCount');
const seatInfo = getId('seatInfo');
const totalPriceId = getId('totalPriceId');
let grandTotal = getId('grandTotal');
let couponInput = getId('couponInput');
const applyBtn = getId('applyBtn');
const discountAmountDisplay = getId('discountAmountDisplay');
const couponMessage = getId('couponMessage');

let buttonCount = 0;
//Select your seat
seatBtn.forEach(seat => {

  //after clicked once remove event listener
  function handleClick() {
    if (buttonCount >= 4) {
      alert("You can buy only 4 ticket!");
      couponInput.style.disabled = 'false';
      applyBtn.style.disabled = 'false';
      return;
    }
    buttonCount++;

    // btn style change
    seat.style.backgroundColor = '#66CC8A';
    seat.style.color = '#ffffff';
    // button show unclickable
    seat.style.cursor = 'not-allowed';

    //count left seat
    totalSeat.textContent = 40 - buttonCount;

    //count total seat
    seatCount.textContent = buttonCount;

    //set seat info
    const div = element('div');
    div.className = "flex justify-between items-center text-sm"
    div.innerHTML = `
        <p>${seat.textContent}</p>
        <p>Economy</p>
        <p data-price = '550' >550</p>
      `
    seatInfo.appendChild(div);

    //total price show
    const totalPrice = totalPriceCalculation(buttonCount);
    totalPriceId.textContent = totalPrice;

    //coupon apply button and input enable
    if (buttonCount === 4) {
      couponInput.disabled = false;
      applyBtn.disabled = false;
    }

    //Grand total price show
    grandTotal.textContent = totalPrice;

    //remove listener from button
    seat.removeEventListener('click', handleClick);
  }
  //add listener in button
  seat.addEventListener('click', handleClick);
})


//Coupon Apply function
applyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  //condition for different coupon and percentage
  if (couponInput.value === 'NEW15') {
    const fiftyPrecentDiscount = discountCouponCalculation(parseInt(grandTotal.textContent), 15);
    console.log(fiftyPrecentDiscount);
    // display discount amount
    discountAmountDisplay.innerHTML = `
    <h2>Discount Amount</h2>
    <h2>BDT <span">${fiftyPrecentDiscount.discountAmount}</span></h2>
    `
    // update grand total price
    grandTotal.textContent = fiftyPrecentDiscount.discountPrice;

  } else if (couponInput.value === 'Couple 20') {
    const twentyPrecentDiscount = discountCouponCalculation(parseInt(grandTotal.textContent), 20);
    // display discount amount
    discountAmountDisplay.innerHTML = `
    <h2>Discount Amount</h2>
    <h2>BDT <span">${twentyPrecentDiscount.discountAmount}</span></h2>
  `
    // update grand total price
    grandTotal.textContent = twentyPrecentDiscount.discountPrice;
  }else{
    couponMessage.textContent = 'Please enter valid coupon code!';
  }

  // input field reset
  couponInput.value = '';
  // input and apply will disabled
  couponInput.disabled = true;
  applyBtn.disabled = true;

})