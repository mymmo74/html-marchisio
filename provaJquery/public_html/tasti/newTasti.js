document.querySelector("body").onkeydown = function (e) {
    let obj=document.createElement("li");
    console.log(e);
    let carattere=String.fromCharCode(e.which);
    obj.innerHTML="hai premuto il tasto "+carattere.toLowerCase()+" (maiuscolo: "+carattere.toUpperCase()+") con codice "+e.which;
    $("#contenitore").append(obj);
    
 //per altri esempi guardare code pen
};