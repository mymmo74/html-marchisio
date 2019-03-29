/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package noleggio.business;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ejb.Stateless;
import noleggio.entity.Bicicletta;

/**
 *
 * @author tss
 */
@Stateless
public class BiciclettaStore {

    // metodo pubblico
    public List<Bicicletta> all() {
        List<Bicicletta> result = new ArrayList<>();

        try (Connection cn = DSManager.connection()) {
            // try con resources
            try (Statement cmd = cn.createStatement();
                    ResultSet query = cmd.executeQuery("select id_bicicletta,marca,modello"
                            + " from t_biciclette "
                            + "order by marca")) {
                // per ogni record creo oggetto Customer
                // alla fine abbiamo una lista di oggetti
                while (query.next()) {
                    result.add(new Bicicletta(
                            query.getInt("id_bicicletta"),
                            query.getString("marca"),
                            query.getString("modello")));
                }
            }
            return result;
        } catch (SQLException ex) {
            Logger.getLogger(BiciclettaStore.class.getName()).log(Level.SEVERE, null, ex);
            throw new RuntimeException("DbManager error");
        }
    }

}
