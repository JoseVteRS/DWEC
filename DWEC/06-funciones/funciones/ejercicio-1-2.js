// Ejercicio 1.2 - Función anónima autoinvocada con variable contador

(function() {
  var contador = 0;
  contador++;
  console.log("Ejercicio 1.2 - Valor del contador dentro de la función:", contador);
})();

// Intentar acceder a la variable contador fuera de la función
try {
  console.log("Intentando acceder al contador fuera de la función:", contador);
} catch (error) {
  console.log("Error al acceder al contador:", error.message);
  console.log("Observación: La variable 'contador' no es accesible fuera de la función porque tiene scope local.");
}

