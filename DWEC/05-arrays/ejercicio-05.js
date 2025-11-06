const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

const [rojo, verde, ...resto] = colores;

const restoColores = resto;

console.log(rojo);
console.log(verde);
console.log(restoColores);
