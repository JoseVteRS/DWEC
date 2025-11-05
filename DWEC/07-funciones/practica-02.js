/**
 * Práctica 2.
 */

// Añadir método al prototipo de Array para calcular la media aritmética
Array.prototype.media = function() {
    if (this.length === 0 || !Array.isArray(this)) {
        return 0;
    }
    const suma = this.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / this.length;
};

// Pruebas de funcionamiento:
console.log("==== Pruebas de método media() ====");

// Prueba 1: Array con números enteros
const arr1 = [1, 2, 3, 4, 5];
console.log("arr1:", arr1);
console.log("arr1.media():", arr1.media()); // Esperado: 3

// Prueba 2: Array con números decimales
const arr2 = [10.5, 20.3, 30.7];
console.log("arr2:", arr2);
console.log("arr2.media():", arr2.media()); // Esperado: 20.5

// Prueba 3: Array con un solo elemento
const arr3 = [42];
console.log("arr3:", arr3);
console.log("arr3.media():", arr3.media()); // Esperado: 42

// Prueba 4: Array vacío
const arr4 = [];
console.log("arr4:", arr4);
console.log("arr4.media():", arr4.media()); // Esperado: 0

// Prueba 5: Array con números negativos
const arr5 = [-5, 0, 5, 10];
console.log("arr5:", arr5);
console.log("arr5.media():", arr5.media()); // Esperado: 2.5

// Prueba 6: Verificar que funciona con cualquier array
const arr6 = [1, 1, 1, 1, 1];
console.log("arr6:", arr6);
console.log("arr6.media():", arr6.media()); // Esperado: 1
