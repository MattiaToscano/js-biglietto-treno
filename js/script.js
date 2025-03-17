let userChilometri = prompt ('Inserisci chilometri Viaggio');
let userEtà = prompt ('Inserisci età');
let prezzo = userChilometri * 0.21;



if(userEtà <18){
    prezzo = prezzo - (prezzo * 0.2);
    console.log('Verrà applicato lo sconto per minorenni ' + prezzo) 
}

else if(userEtà >=65){
    prezzo = prezzo - (prezzo * 0.4);
    console.log('Verrà applicato lo sconto per over 65 ' + prezzo) 
}

else{prezzo = prezzo;
    console.log('Nessuno sconto applicato ' + prezzo)
}

