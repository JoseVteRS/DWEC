let data = [
  { name: "Nacho", telephone: "966112233", age: 40 },
  { name: "Ana", telephone: "911223344", age: 35 },
  { name: "Mario", phone: "611998877", age: 15 },
  { name: "Laura", telephone: "633663366", age: 17 },
];

// Comprueba con console.log(data) que se han añadido.
console.log(data);

// Ordenar el vector por edad, comprueba el resultado.
data.sort((a, b) => a.age - b.age);
console.log(data);

// Ordena el vector por nombre, comprueba el resultado.
data.sort((a, b) => a.name.localeCompare(b.name));
console.log(data);

// Crea y muestra u nuevo vector que contenga solo los mayores de 30 años.
const mayoresDe30 = data.filter((persona) => persona.age > 30);
console.log(mayoresDe30);
