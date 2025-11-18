// Ejercicio 1.4 - Función flecha para verificar si un número es par

const esPar = (numero) => {
    var esPar = numero % 2 === 0;
    return esPar;
};

// Probar la función con diferentes números
console.log("Ejercicio 1.4 - Verificar números pares:");
console.log("¿Es 4 par?", esPar(4));     // true
console.log("¿Es 7 par?", esPar(7));     // false
console.log("¿Es 10 par?", esPar(10));   // true
console.log("¿Es 15 par?", esPar(15));   // false
console.log("¿Es 0 par?", esPar(0));     // true

