/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var sx = parseInt(Math.random() * 1000);
document.querySelector("#aereo").style.left = sx + "px";
var alto = parseInt(Math.random() * 100);
document.querySelector("#aereo").style.top = alto + "px";
document.querySelector("#aereo").style.width = "70px";
document.querySelector("#aereo").style.height = "70px";

var angolo = 0;

document.querySelector("body").onkeydown = function (e) {
    //document.querySelector("#aereo").innerHTML = e.which;
    switch (e.which) {
        case 38:
            if (e.shiftKey) {
                ridimensiona("#aereo", 0, -5);
            }
            if (!e.shiftKey && !e.ctrlKey) {
                muovi("#aereo", 0, -5);
            }

            break;
        case 40:
            if (e.shiftKey) {
                ridimensiona("#aereo", 0, +5);
            }

            if (!e.shiftKey && !e.ctrlKey) {
                muovi("#aereo", 0, +5);
            }
            break;
        case 39:
            if (e.shiftKey) {
                ridimensiona("#aereo", +5, 0);
            }
            if (!e.shiftKey && !e.ctrlKey) {
                muovi("#aereo", +5, 0);
            }
            if (e.ctrlKey) {
                ruota("#aereo", +5);
            }
            break;
        case 37:
            if (e.shiftKey) {
                ridimensiona("#aereo", -5, 0);
            }
            if (!e.shiftKey && !e.ctrlKey) {
                muovi("#aereo", -5, 0);
            }
            if (e.ctrlKey) {
                ruota("#aereo", -5);
            }
            break;
    }
    console.log(e);
};



function muovi(str, x, y) {

    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    if (posY > window.innerHeight) {
        posY = 0;
    }
    if (posY < 0) {
        posY = window.innerHeight;
    }
    if (posX > window.innerWidth) {
        posX = 0;
    }
    if (posX < 0) {
        posX = window.innerWidth;
    }
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";

    console.log(str, posX, posY);
}

function ridimensiona(str, x, y) {

    let posX = parseFloat(document.querySelector(str).style.width);
    let posY = parseFloat(document.querySelector(str).style.height);
    posX += x;
    posY += y;
    document.querySelector(str).style.width = posX + "px";
    document.querySelector(str).style.height = posY + "px";

    console.log(str, posX, posY);
}

function ruota(str, a) {
    angolo += a;
//    let stringa="rotate(" + angolo + ")"
    document.querySelector(str).style.transform = "rotate(" + angolo + "deg)";
}