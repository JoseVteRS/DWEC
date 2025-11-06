const tresLetras = [];

// Ejercicio 2. Crea un array vacío llamado letras.
// Inserta al principio del array las letras A, B y C.
console.log("=== Inserta al principio del array las letras A, B y C ===");
const letras = [];
letras.unshift("A", "B", "C");
console.log(letras);

// Inserta al final las letras D y E.
console.log("=== Inserta al final las letras D y E ===");
letras.push("D", "E");
console.log(letras);

// Elimina el primer elemento y el último.
console.log("=== Eliminar el primer elemento y el último ===");
letras.shift();
letras.pop();
console.log(letras);

// Imprime el array final.
console.log("=== Array final ===");
console.log(letras);