
const generaBtn = document.querySelector(`genera-btn`);
const anullaBtn = document.querySelector(`annulla-btn`);
const kmPercorre = document.querySelector(`km-percorre`).value;
const fullName = document.querySelector(`full_name`);
const ticketPrice = kmPercorre * 0.21;


generaBtn.addEventListener("click", function(){
    if (age < 18) {

        const ticketPrice = kmPercorre * 0.21 * 0.8;
        console.log("Ticket Price Under 18:", ticketPrice.toFixed(2));
    } else if (age > 65) {
        const ticketPrice = kmPercorre * 0.21 * 0.6;
        console.log("Ticket Price Over 65:", ticketPrice.toFixed(2));
    } else {
        console.log("Regular Ticket Price", ticketPrice);
    }
})