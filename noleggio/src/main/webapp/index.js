
// Fa la chiamata
fetch('http://localhost:8080/noleggio/api/biciclette')
        // seguita da un'insieme di .THEN, siccome è asincrono
        // response è di tipo JSON
        .then(response => response.json())
        .then(data => render(data));

function render(data){
//    Dentro map che fa un for each
// crea nuovo array
    data.map(bici => renderBici(bici))
            .forEach(el => document.body.appendChild(el));
}

function renderBici(bici){
    const el = document.createElement("p");
    
//    back tick
    el.innerHTML=`marca -> ${bici.marca} | modello -> ${bici.modello}`;
    return el;
}