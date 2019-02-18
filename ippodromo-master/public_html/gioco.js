// richiamo la funzione per l'inizializzazione
resetValori();

function resetValori() {
// stabilisco le posizioni di partenza dei cavalli (assegnando la proprietà top)
    document.querySelector("#cavallo1").style.left = "0px";
    document.querySelector("#cavallo1").style.top = "50px";

    document.querySelector("#cavallo2").style.left = "0px";
    document.querySelector("#cavallo2").style.top = "150px";

    document.querySelector("#cavallo3").style.left = "0px";
    document.querySelector("#cavallo3").style.top = "250px";

    document.querySelector("#cavallo4").style.left = "0px";
    document.querySelector("#cavallo4").style.top = "350px";

    document.querySelector("#cavallo5").style.left = "0px";
    document.querySelector("#cavallo5").style.top = "450px";
    
    // resetto i campi degli span per l'ordine di arrivo
    for (i=1; i<=5;i++){
        document.querySelector("#pos" + i).innerHTML ="";
    }
    
}


// pulsante di avvio corsa e click su cavallo per informazioni
function startRace() {
    // inizializzazione
    resetValori();
    // disabilito il pulsante di START per impedire accidentali click
    document.querySelector("#in_start").disabled = true;
    // rendo invisibile il box ordine di arrivo
    document.querySelector("#result").style.display = "none";
    
    // Assegno i timer ai cavalli
    document.querySelectorAll(".horse").forEach(function (elm, k) {
        // un elemento di velocità per rendere più fluido il movimento dei cavalli
        elm.vel = 5 + Math.random() * 15;
        // assegno l'id per successivi clearInterval
        elm.idtimer = setInterval(function () {
            muovi("#" + elm.id, elm.vel + (-5 + Math.random() * 10), 0);
        }, 1000 / 25);
        elm.onclick = function () {
            document.querySelector("#div_info").innerHTML = "Hai fatto click su " + elm.alt;
        };

    });

}

// funzione principale per il movimento e controllo di vittoria del cavallo
function muovi(str, x, y) {
    console.log(str, x, y);
    // rilevo la posizione dei cavalli e aggiungo l'allungo corrente
    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";
    // richiamo l'ID per la clearInterval
    id = document.querySelector(str).idtimer;
    // verifico la posizione del cavallo, se ha tagliato il traguardo
    // l'immagine cavallo è larga 100px, ecco perchè verifico se a tagliare
    // il traguardo è la parte iniziale del cavallo
    if (posX + 100 >= window.innerWidth) {
        // cancello l'eventuale box informazioni cavalli
        document.querySelector("#div_info").innerHTML = "";
        // visualizzo il box per l'ordine di arrivo
        document.querySelector("#result").style.display = "block";
        // effettuo la verifica della posizione d'arrivo
        for (let r = 1; r <= 5; r++) {
            let posizione = document.querySelector("#pos" + r).innerHTML;
            // se il contenuto dello span con id (pos+r) è vuoto, allora questa è la posizione del cavallo
            if (posizione === "") {
                // assegno allo span la proprietà "ALT" dell'immagine, vi è contenuto il nome del cavallo
                document.querySelector("#pos" + r).innerHTML = document.querySelector(str).alt;
                if (r === 5) {
                    document.querySelector("#in_start").disabled = false;
                }
                // stoppo il timer (il cavallo può fermare la sua corsa)
                clearInterval(id);
                console.log("Cancellato timer ",id);
                // esco dal ciclo for
                break;
            }
        }
    }
    // stampo sulla console il cavallo e le relative posizioni sullo schermo
    console.log(str, posX, posY);
}

