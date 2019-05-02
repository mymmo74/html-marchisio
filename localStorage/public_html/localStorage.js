//var valore = localStorage.getItem("nota");
//var nuovoValore = prompt("nuovo valore", valore);
//localStorage.setItem("nota", nuovoValore);

function Salva() {
    let Titolo = document.querySelector("#titolo").value;
    let Note = document.querySelector("#note").value;

    localStorage.setItem("titolo", Titolo);
    localStorage.setItem("note", Note);
}

function caricaSelect() {
    var array_paesi = ['Belgio', 'Francia', 'Inghilterra', 'Italia', 'Olanda', 'Spagna'];
    esempio_select_1 = document.querySelector("#optNota");

    for (i = 0; i < array_paesi.length; i++) {
        esempio_select_1.add(new Option(array_paesi[i]));
    };
    Nota=document.querySelector("#optNota");
//    Nota[2].selected=true;
    Nota.selectedIndex=1;
}

function Carica() {
    caricaSelect();



    let Titolo = localStorage.getItem("titolo");
    let Note = localStorage.getItem("note");
//    document.querySelector("#optNota").value = Titolo;
    document.querySelector("#titolo").value = Titolo;
    document.querySelector("#note").value = Note;

}

// usare JSON.stringify(obj) per salvare i dati
// usare JSON.parse(obj( per leggere i dati