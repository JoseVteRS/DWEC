const frecuencias = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 10000; i++) {
  const numero = Math.floor(Math.random() * 10) + 1;

  frecuencias[numero - 1]++;
}

console.log("___Frecuencias___");

for (let i = 0; i < 10; i++) {
  console.log("Número " + (i + 1) + ": " + frecuencias[i]);
}