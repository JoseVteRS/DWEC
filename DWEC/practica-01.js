/**
 * Práctica 1.
 */

class Punto {
    constructor(x, y) {
        this.x = (typeof x === 'number') ? x : 0;
        this.y = (typeof y === 'number') ? y : 0;
    }

    cambiar(x, y) {
        this.x = (typeof x === 'number') ? x : 0;
        this.y = (typeof y === 'number') ? y : 0;
    }

    copia() {
        return new Punto(this.x, this.y);
    }

    suma(otroPunto) {
        return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
    }
}

// Pruebas de funcionamientos:
console.log("==== Pruebas de Punto ====");

// Constructor: pasar números
const p1 = new Punto(1, 2);
console.log("p1:", p1); // Esperado: {x:1, y:2}

// Constructor: pasar valores no numéricos
const p2 = new Punto("a", null);
console.log("p2:", p2); // Esperado: {x:0, y:0}

// Método cambiar: pasar números
p2.cambiar(5, 6);
console.log("p2 (luego de cambiar a 5,6):", p2); // Esperado: {x:5, y:6}

// Método cambiar: pasar valores no numéricos
p2.cambiar("parametro1", "parametro2");
console.log("p2 (cambiar con no números):", p2); // Esperado: {x:0, y:0}

// Método copia
const p3 = p1.copia();
console.log("p3 (copia de p1):", p3); // Esperado: {x:1, y:2}
console.log("p3 !== p1 ?", p3 !== p1); // true

// Método suma
const p4 = p1.suma(p2); // p1 = (1,2), p2 = (0,0) tras última operación
console.log("p4 = p1.suma(p2):", p4); // Esperado: {x:1, y:2}

// Método suma con otro punto
const p5 = p1.suma(new Punto(10, 20));
console.log("p5 = p1.suma(10,20):", p5); // Esperado: {x:11, y:22}

// Método suma con otro punto diferente
const p6 = p1.suma(new Punto(3, 4));
console.log("p6 = p1.suma(new Punto(3, 4)):", p6); // Esperado: {x:4, y:6}
