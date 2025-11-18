// Script común para las prácticas 1 y 2
// Funciones compartidas para pedir palabras y mostrar resultados

// Función para pedir palabras al usuario hasta que cancele o deje vacío
function pedirPalabras() {
  let palabras = [];
  let palabra;
  
  while (true) {
    palabra = prompt("Introduce una palabra (cancela o deja vacío para terminar):");
    
    // Si es null (cancelar) o string vacío, terminamos
    if (palabra === null || palabra === "") {
      break;
    }
    
    palabras.push(palabra);
  }
  
  return palabras;
}

// Función para mostrar resultados en pantalla
function mostrarResultado(contenido) {
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = contenido;
}

