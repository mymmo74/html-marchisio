var j= [
    {
        "cognome": "Rossi",
        "nome": "Luigi",
        "email": "l.rossi@emai.it"
    },
    {
        "cognome": "Bianchi",
        "nome": "Franca",
        "email": "f.bianchi@libero.it"
    }
]



j.forEach(function (record,k){
    let riga= document.createElement("tr");
    let cellaNome= document.createElement("td");
    let cellaCognome= document.createElement("td");
    let cellaEmail= document.createElement("td");
    cellaNome.innerHTML= record.nome;
    cellaCognome.innerHTML= record.cognome;
    cellaEmail.innerHTML= record.email;
    riga.append(cellaNome);
    riga.append(cellaCognome);
    riga.append(cellaEmail);
   
    document.querySelector("#tabAnagrafica tbody").append(riga);
});