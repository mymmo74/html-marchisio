/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var listaColori = "red,orange,yellow,blue,cyan,green,black,white,skyblue,lightblue";
//prende la stringa su e la fa diventare un vettore utilizzando la "," come carattere separatore
var colori = listaColori.split(",");
document.querySelectorAll(".circle").forEach(function (elm, k) {
            elm.style.backgroundColor = colori[k];
            elm.style.top=(Math.random()*window.innerHeight)+"px";
            elm.style.left=(Math.random()*window.innerWidth)+"px";
    });