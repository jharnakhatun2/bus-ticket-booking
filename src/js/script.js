// Select elements
const seatBtn = getAllClass('.seat');
const totalSeat = getId('totalSeat');
const seatCount = getId('seatCount');
const seatInfo = getId('seatInfo');

let buttonCount = 0;
//Select your seat
seatBtn.forEach( seat => {
    seat.addEventListener('click', (event)=>{
        buttonCount++;
        const btn = event.target;

        // btn style change
        btn.style.backgroundColor = '#66CC8A';
        btn.style.color = '#ffffff';

        //count left seat
        totalSeat.textContent = 40 - buttonCount ;

        //count total seat
        seatCount.textContent = buttonCount;

        
        //set seat info
        const secondaryDiv = element('div')
        const div = element('div');
        div.className = "flex justify-between items-center text-sm"
        div.innerHTML = `
          <p>${btn.textContent}</p>
          <p>Economy</p>
          <p>550</p>
        `
        seatInfo.appendChild(div);

        console.log(btn.textContent);
        console.log(buttonCount);
    
    })
})