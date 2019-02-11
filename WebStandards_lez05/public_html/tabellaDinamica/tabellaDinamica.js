/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* palette */
var paletteColori= [
    "white","black","yellow","orange",
    "red","brown","blue","cyan",
    "green","pink","magenta","salmon", 
    "violet", "indigo"];

function generaTabella() {
    let righe = parseFloat(document.getElementById("righe").value);
    let colonne = parseFloat(document.getElementById("colonne").value);
    let tabella = "";

    if (righe > 0 && colonne > 0) {
        tabella = "<table id='tabella1'>";
        for (let r = 1; r <= righe; r++) {
            tabella += "<tr>";

            for (let c = 1; c <= colonne; c++) {
                tabella += "<td></td>";
            }
            tabella += "</tr>";
        }
        tabella += "</table>";

        document.getElementById("contenitoreTab").innerHTML = tabella;
        generaEventi();
        generaTavolozza();
        
    }

}

function generaEventi() {
    document.querySelectorAll("#tabella1 tr td").forEach(function (elm, k) {
        elm.onclick = function () {
            elm.style.backgroundColor = "red";
            console.log("click .cella");
        };
    });
}

function generaTavolozza(){
    let righe = 4;
    let colonne = 4;
    let tabella = "";
    
    if (righe > 0 && colonne > 0) {
        tabella = "<table id='tabella2'>";
        for (let r = 1; r <= righe; r++) {
            tabella += "<tr>";

            for (let c = 1; c <= colonne; c++) {
                tabella += "<td></td>";
            }
            tabella += "</tr>";
        }
        tabella += "</table>";

        document.getElementById("contenitoreColore").innerHTML = tabella;
        generaEventiColori();
    }
}

function generaEventiColori() {
    document.querySelectorAll("#tabella2 tr td").forEach(function (elm, k) {
            elm.style.backgroundColor = paletteColori[k];
    });
}