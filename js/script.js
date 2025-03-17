


// 1. Chiediamo all'utente quanti chilomentri vorrà percorrere.
let userChilometri = prompt ('Inserisci chilometri Viaggio');

// 2. Chiediamo all'utente l'età.
let userEtà = prompt ('Inserisci età');

//3. Calcoliamo il prezzo del biglietto in base ai chilometri inseriti dall'utente.
let prezzo = userChilometri * 0.21;


//4. Applichiamo uno sconto del 20% per i minorenni e del 40% per gli over 65.
if(userEtà <18){
    prezzo = prezzo - (prezzo * 0.2);
    console.log('Verrà applicato lo sconto per minorenni ' + prezzo.toFixed(2)); 
}

else if(userEtà >=65){
    prezzo = prezzo - (prezzo * 0.4);
    console.log('Verrà applicato lo sconto per over 65 ' + prezzo.toFixed(2));
}

else{prezzo = prezzo;
    console.log('Nessuno sconto applicato ' + prezzo.toFixed(2));
}

