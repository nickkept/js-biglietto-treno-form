const typeOfTicket = document.getElementById("tipo-ticket")
const prezzoMostrato = document.getElementById("prezzo-biglietto-def")
const nameAndLast = document.getElementById("nome-completo")
const passengerTicket = document.getElementById("passenger-name")
const userAge0 = document.getElementById("fasciaetà")
const kmDaPercorrere0 = document.getElementById("km-percorso")
const cancelButton = document.getElementById("cancel")
const genera = document.getElementById("generate")
const carrozza = document.getElementById("rndm-numb-car")
const codiceTicket = document.getElementById("rndm-numb-tick")
const hideTitle = document.getElementById("hide1")
const hideTicket = document.getElementById("hide2")


// Cancel Button
cancelButton.addEventListener("click", function() {
    nameAndLast.value = "";
    kmDaPercorrere0.value = "";
    userAge0.value = 0;

    hideTitle.classList.add("d-none");
    hideTicket.classList.add("d-none");
});

// Generate Button
genera.addEventListener("click", function () {
    // Random numbers
    carrozza.innerHTML =  Math.ceil(Math.random() * 20) + 1;
    codiceTicket.innerHTML =  Math.ceil(Math.random() * 100000000) + 1;
    
    let userAge = parseInt(userAge0.value)
    let kmRequest = parseInt(kmDaPercorrere0.value)

    let prezzoDelBiglietto = kmRequest * 0.21

    if ( isNaN( kmRequest )) {
    alert( "Il dato inserito non è valido!" );
    }

    if ( userAge === 1 ) {
        let scontoMinorenni = prezzoDelBiglietto * 0.80 ;
        const prezzoScontato = scontoMinorenni.toFixed(2)
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per minorenni"
    } else if ( userAge === 3) {
        let scontoOver = prezzoDelBiglietto * 0.60 ;
        const prezzoScontato = scontoOver.toFixed(2);
        console.log(prezzoScontato)
        prezzoMostrato.innerHTML = "€" + prezzoScontato
        typeOfTicket.innerHTML = "Biglietto scontato per over 65"
    } else {
        prezzoMostrato.innerHTML = "€" + prezzoDelBiglietto.toFixed(2)
        typeOfTicket.innerHTML = "Biglietto Standard"
    }

    passengerTicket.innerHTML = nameAndLast.value
    console.log(userAge, userAge0, kmDaPercorrere0.value, kmRequest,prezzoDelBiglietto)
})