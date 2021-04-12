/* Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
$(document).ready(function(){
    //VARIABILI NUMERI
    var numeriCasuali = [ ];
    var numeriInseriti = [ ];
    var numeriIndovinati = [ ];

    //LOOP PER GENERARE NUMERI RANDOM

    for(i = 0; i < 5; i++){
      genRandom = Math.floor(Math.random()*10)+1;
      numeriCasuali.push(genRandom);
    }
    alert(numeriCasuali);
    console.log(numeriCasuali);
    
    
    //CHIEDERE IN NUMERI ALL UTENTE CON UN TIME DI 30 SECONDI
    setTimeout(function(){
        for(i = 0; i < 5; i++){
            var numeriUtente = parseInt(prompt("INSERIRE IL NUMERO"));
            numeriInseriti.push(numeriUtente);
            if(numeriCasuali.includes(numeriUtente)){
                numeriIndovinati.push(numeriUtente);
            }
        }
        //STAMPA NUMERI INSERITI/INDOVINATI
        console.log(numeriInseriti);
        console.log("Totale numeri indovinati: " + numeriIndovinati.length + " Numeri indovinati: " + numeriIndovinati);
    }, 2000);

})
