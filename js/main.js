/* Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
$(document).ready(function(){
    //
    var vincita = $(".vincita");
    
    //VARIABILI NUMERI
    var numeriCasuali = [ ];
    var numeriInseriti = [ ];
    var numeriIndovinati = [ ];
    
    //LOOP PER GENERARE NUMERI RANDOM UNIVOCI

    for(i = 0; i < 5; i++){
      genRandom = Math.floor(Math.random()*10)+1;

      if(! numeriCasuali.includes(genRandom)){
          numeriCasuali.push(genRandom);
      }
    }
    
    alert(numeriCasuali);
    console.log(numeriCasuali);
    
    
    //CHIEDERE I NUMERI ALL UTENTE CON UN TIME DI 30 SECONDI
    setTimeout(function(){
        for(i = 0; i < 5; i++){
            //PROMPT PER CHIEDERE IL NUMERO ALL UTENTE
            var numeriUtente = parseInt(prompt("Indovinare i numeri."));
            console.log(numeriUtente);

            //VALIDAZIONI INSERIMENTO NUMERO
            while(isNaN(numeriUtente) || numeriUtente < 1 || numeriUtente >10 || numeriInseriti.includes(numeriUtente)){
                var numeriUtente  = parseInt(prompt("Devi inserire uno dei numeri da indovinare."));
            }
            //NUMERI INSERITI DA AGGIUNGERE ALL ARRAY 
            numeriInseriti.push(numeriUtente);
            //CONDIZIONE NEL CASO IN CUI I NUMERI INSERITI DALL UTENTE SIANO UGUALI A QUELLI GENERATI RANDOM CHE VANNO INSERITI NEI NUMERI INDOVINATI
            if(numeriCasuali.includes(numeriUtente)){
                numeriIndovinati.push(numeriUtente);
            }
        }
        //STAMPA NUMERI INSERITI/INDOVINATI
        console.log(numeriInseriti);
        console.log("Totale numeri indovinati: " + numeriIndovinati.length + " Numeri indovinati: " + numeriIndovinati);
        vincita.text("Totale numeri indovinati: " + numeriIndovinati.length + " Numeri indovinati: " + numeriIndovinati)
    }, 2000);

})
