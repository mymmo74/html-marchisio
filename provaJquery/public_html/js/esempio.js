
$(function () {
    $("#titolo").css({
        "color": "red",
        "background-color": "blue",
        "font-size": "50px"
    }).click(function () {
        alert("hai cliccato il titolo")
    })


    $("#tbl01 td").html(function (i, old) {
        
        coloraGiallo(this)
        return parseInt(Math.random() * 100);
    }).click(function () {
        let colore = $(this).attr("colore");
        if (colore === "giallo") {
            coloraBianco(this);
        } else {
            coloraGiallo(this);
        }
        valore = $(this).html()
        return $(this).html(parseInt(valore) + 1);
    })

    // nella funzione il parametro indicato non può essere la parola riservata THIS
    function coloraGiallo(cella) {
        // creo attributo "colore" con i possibili valori "giallo" e "bianco"
        $(cella).attr("colore", "giallo");
        // tramite il metodo css metto il colore alla proprietà 
        $(cella).css("background-color", "rgb(255,255,0");
    }

    function coloraBianco(cella) {
        $(cella).attr("colore", "bianco");
        $(cella).css("background-color", "rgb(255,255,255");
    }
})

//con solo javascript
//window.onload)=function (){
//    
//    document.querySelectorAll("#tbl01 td").foreach(function (elm,i){
//        elm.innerHtml=parseInt(Math.random() * 100);
//    })
//    
//    document.querySelectorAll("#tbl01 td").foreach(function (elm,i){
//        elm.onclick(function (elm,i){
//            valore=$(this).html()
////          alert ("ok")
////          valore=$(this).val()
//            return $(this).html(valore*1+1);
//        })
//    })
//}