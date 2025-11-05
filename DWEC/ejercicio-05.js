/**
 * E5. 
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
    encender() {
        return `El coche ${this.marca} ${this.modelo} ha sido encendido`;
    }
}

const coche1 = new Coche("Toyota", "Corolla", 2020);
const coche2 = new Coche("Ford", "Mustang", 2021);

console.log(coche1.detalles());
console.log(coche1.encender());
console.log(coche2.detalles()); 
console.log(coche2.encender());