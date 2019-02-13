/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// 
var coloreSelezionato = "red";
// colori disponibili
var listaColori = "red,orange,yellow,blue,cyan,green,black,white";
//prende la stringa su e la fa diventare un vettore utilizzando la "," come carattere separatore
var colori = listaColori.split(",");

document.querySelector("#pStart").onclick = function () {
    console.log("click sul pulsante pStart");
    creoAmbienteGioco();
};


function creoAmbienteGioco() {
    console.log("creo ambiente gioco");
    generaTabellaDisegno();
    programmaClickTabellaDisegno();
    generaTavolozza();
    coloraTavolozza();
    programmaClickTavolozza();
}

/**
 * Crea una tabella 20x20 e la inserisce in conT1
 * la tabella si chiamerà tabellaT1
 * @returns {undefined}
 */
function generaTabellaDisegno() {
    // mi genera l'html
    let html = generaTabHtml(20, 20, "TabellaT1", "tab");
    // inserisco nel div la tabella
    document.querySelector("#contT1").innerHTML = html;
    console.log(html);

}


function programmaClickTabellaDisegno() {
    document.querySelectorAll("#TabellaT1 tr td").forEach(function (elm, k) {
        elm.onclick = function () {
            console.log("ho cliccato sulla cella");
            this.style.backgroundColor = coloreSelezionato;
        };
    });
}

/* Crea una tabella 1x8 e la inserisce in conT2
 * la tabella si chiamerà tavolozza
 */
function generaTavolozza() {
    // mi genera l'html
    let html = generaTabHtml(8, 1, "tavolozza", "tab");
    // inserisco nel div la tabella
    document.querySelector("#contT2").innerHTML = html;
    console.log(html);
}

//
function coloraTavolozza() {
    document.querySelectorAll("#tavolozza td").forEach(function (elm, k) {
        elm.style.backgroundColor = colori[k];
    });
}


function programmaClickTavolozza() {
    document.querySelectorAll("#tavolozza td").forEach(function (elm, k) {
        elm.onclick=function(){
            coloreSelezionato=elm.style.backgroundColor;
        };
    });
}