/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package noleggio.entity;

import java.util.Objects;
import java.util.logging.Logger;

/**
 *
 * @author tss
 */
public class Bicicletta {
    private int id;
    private String marca;
    private String modello;

    public Bicicletta(int id, String marca, String modello) {
        this.id = id;
        this.marca = marca;
        this.modello = modello;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModello() {
        return modello;
    }

    public void setModello(String modello) {
        this.modello = modello;
    }

    public Bicicletta() {
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 73 * hash + this.id;
        hash = 73 * hash + Objects.hashCode(this.marca);
        hash = 73 * hash + Objects.hashCode(this.modello);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Bicicletta other = (Bicicletta) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.marca, other.marca)) {
            return false;
        }
        if (!Objects.equals(this.modello, other.modello)) {
            return false;
        }
        return true;
    }
    
}
