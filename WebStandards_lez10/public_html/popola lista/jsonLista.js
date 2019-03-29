



function creaElencoPuntato(oggJson) {
    oggJson.forEach(function (record, k) {
        let elenco = document.createElement("ul");
        let punto = document.createElement("li");
        punto.innerHTML = record.cognome;

        let elenco2 = document.createElement("ul");
        let punto2 = document.createElement("li");
        punto2.innerHTML = record.nome;

        let punto3 = document.createElement("li");
        punto3.innerHTML = record.email;

        elenco.append(punto);
        punto.append(elenco2);
        elenco2.append(punto2);
        elenco2.append(punto3);

        document.body.append(elenco);
    });
}

creaElencoPuntato(j);


