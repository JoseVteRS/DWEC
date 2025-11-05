/**
 * E4. 
 */

class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    detalles() {
        return `El coche es ${this.marca} ${this.modelo} ${this.año}`;
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2020);
const coche2 = new Coche("Ford", "Mustang", 2021);