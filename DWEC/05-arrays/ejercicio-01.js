const paises = ["España", "Francia", "Alemania", "Italia"];

console.log("=== Todos los países ===");
for (const pais of paises) {
  console.log(pais);
}

const paises2 = paises.shift();
console.log("=== Sin el primer país ===");
for (const pais2 of paises) {
  console.log(pais2);
}
