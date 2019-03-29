/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package noleggio.services;

import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import noleggio.business.BiciclettaStore;
import noleggio.entity.Bicicletta;

/**
 *
 * @author tss
 */
// mapperà su un path ogni metodo pubblico http (.../api/customers)
//il path si aggiunge a quello di "entrata", nel nostro caso "/api"
@Path("/biciclette")
public class BiciclettaResources {
    
    // su server non si fanno istanze ma si usa @Inject
    @Inject
    BiciclettaStore manager;
    
    // dobbiamo dire dove  mappare il metodo pubblico
    // per le SELECT è @GET
    @GET
    // Payara converte in automatica l'oggetto List<Bicicletta> in formato JSON
    public List<Bicicletta> all(){
        return manager.all();
        
    }
    
    
}
