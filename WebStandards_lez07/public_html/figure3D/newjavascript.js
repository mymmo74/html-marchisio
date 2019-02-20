/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var indice=0;
var sx=Math.random()*45;
document.getElementById("cont").style.left=sx+"em";
var alto=Math.random()*50;
document.getElementById("cont").style.top=alto+"em";

document.querySelector(".nord").onclick = function (){
    let y =parseFloat(document.getElementById("cont").style.top);
    y-=5;
    document.getElementById("cont").style.top=y+"em";
    console.log("nord",y);
};

document.querySelector(".sud").onclick = function (){
    let y =parseFloat(document.getElementById("cont").style.top);
    y+=5;
    document.getElementById("cont").style.top=y+"em";
    console.log("sud",y);
};

document.querySelector(".est").onclick = function (){
    let x =parseFloat(document.getElementById("cont").style.left);
    x+=5;
    document.getElementById("cont").style.left=x+"em";
    console.log("est",x);
};

document.querySelector(".ovest").onclick = function (){
    let x =parseFloat(document.getElementById("cont").style.left);
    x-=5;
    document.getElementById("cont").style.left=x+"em";
    console.log("est",x);
};


