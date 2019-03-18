/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

nuovoNumero = true;
operazione = "";

document.querySelectorAll(".numero").forEach(function (elm, i) {
    elm.onclick = function () {
        console.log("click", elm);

        if (!blockNum){
            document.querySelector("#schermo").innerHTML="0";
            nuovoNumero = true;
            operazione="";
            return;
        }
        // 
// Controllo se vi è punto decimale
        //e l'attuale tasto premuto + la virgola
        if ((document.querySelector("#schermo").innerHTML.indexOf(".") != -1)
                && (elm.innerHTML == ".")) {
            return false;
        }
        if (nuovoNumero) {
            document.querySelector("#schermo").innerHTML = elm.innerHTML
            nuovoNumero = false
        } else {
            document.querySelector("#schermo").innerHTML += elm.innerHTML
        }
        operazione += elm.innerHTML

    }
    console.log("carico", elm)
});

document.querySelectorAll(".operazione").forEach(function (elm, i) {
    elm.onclick = function () {
        console.log("click ope", elm);

        nuovoNumero = true;
        puntoDecimale = false;

        operazione += elm.innerHTML;
    };
});

document.querySelector(".operazione[ope='calcola']").onclick = function () {
    console.log("calcola", operazione);

    try {
        var risultato = eval(operazione);
    } catch (err) {
        alert("si è verificato un errore");
        console.log(err);
    }
    document.querySelector("#schermo").innerHTML = risultato;
    operazione = risultato;

};

function virgola(s) {
    let ris = true;

    if (s === ".") {
        if ((!puntoDecimale)) {
            ris = false;
            puntoDecimale = false;
        }
    }
    return ris;
}


var blockNum=false
document.querySelectorAll(".blockNum").forEach(function (elm,i){
    elm.onclick=function (){
        console.log("blocknum");
        blockNum=!blockNum;
        blockNum ? elm.classList.add("premuto") : elm.classList.remove("premuto")
    }
})