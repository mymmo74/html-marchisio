/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let obj=document.createElement("div");
obj.classList.add("palla");
obj.innerHTML="1";

let obj2=document.createElement("div");
obj2.classList.add("palla");
obj2.style.backgroundColor="green";
obj2.innerHTML="2";

document.querySelector("body").appendChild(obj);
document.querySelector("body").insertBefore(obj2,obj);
//document.querySelector("body").removeChild(obj2);

