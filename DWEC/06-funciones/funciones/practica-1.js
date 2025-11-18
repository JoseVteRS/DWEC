// Práctica 1 - Eliminar repetidas y ordenar de Z a A

function ejecutarPractica1() {
  // Pedir palabras al usuario usando la función del main.js
  let palabras = pedirPalabras();
  
  // Si no hay palabras, mostrar mensaje
  if (palabras.length === 0) {
    mostrarResultado("<h3>No se introdujeron palabras</h3>");
    return;
  }
  
  // Eliminar palabras repetidas usando Set
  let palabrasUnicas = [...new Set(palabras)];
  
  // Ordenar de Z a A en español
  palabrasUnicas.sort(function(a, b) {
    return b.localeCompare(a, 'es');
  });
  
  // Preparar el resultado para mostrar
  let resultado = "<h3>Resultado</h3>";
  resultado += "<p><strong>Palabras introducidas:</strong> " + palabras.join(", ") + "</p>";
  resultado += "<p><strong>Total:</strong> " + palabras.length + " palabras</p>";
  resultado += "<p><strong>Palabras únicas:</strong> " + palabrasUnicas.length + "</p>";
  resultado += "<p><strong>Ordenadas de Z a A:</strong></p>";
  resultado += "<pre>" + palabrasUnicas.join("\n") + "</pre>";
  
  // Mostrar en pantalla usando la función del main.js
  mostrarResultado(resultado);
  
  // Mostrar en consola también
  console.log("Palabras ordenadas de Z a A:", palabrasUnicas);
}

