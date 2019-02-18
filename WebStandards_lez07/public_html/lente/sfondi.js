/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// 
document.querySelector("#paesaggio").onmousemove=function(e){
   console.log(e.clientX, e.clientY) ;
   // danno la posizione relative al body
   // avendo spostato il div su 100,100
   // per conoscere la posizione sul div paesaggio devo togliere 100
   let x=e.clientX-100;
   let y=e.clientY-100;
   document.querySelector("#lente").style.backgroundPositionX= -x+"px";
   document.querySelector("#lente").style.backgroundPositionY= -y+"px";
   
};