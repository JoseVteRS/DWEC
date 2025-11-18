// Práctica 2 - Contar ocurrencias de palabras usando Map

// Función que recibe un array de palabras y devuelve un Map con el conteo
function contarPalabras(palabras) {
  let mapa = new Map();
  
  // Recorrer todas las palabras
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    
    // Si la palabra ya existe en el mapa, incrementar
    if (mapa.has(palabra)) {
      let contador = mapa.get(palabra);
      mapa.set(palabra, contador + 1);
    } else {
      // Si no existe, añadirla con valor 1
      mapa.set(palabra, 1);
    }
  }
  
  return mapa;
}

function ejecutarPractica2() {
  // Pedir palabras al usuario usando la función del main.js
  let palabras = pedirPalabras();
  
  // Si no hay palabras, mostrar mensaje
  if (palabras.length === 0) {
    mostrarResultado("<h3>No se introdujeron palabras</h3>");
    return;
  }
  
  // Llamar a la función que cuenta las palabras
  let mapaPalabras = contarPalabras(palabras);
  
  // Preparar el resultado para mostrar
  let resultado = "<h3>Resultado</h3>";
  resultado += "<p><strong>Total de palabras introducidas:</strong> " + palabras.length + "</p>";
  resultado += "<p><strong>Palabras únicas:</strong> " + mapaPalabras.size + "</p>";
  resultado += "<p><strong>Conteo de cada palabra:</strong></p>";
  resultado += "<pre>";
  
  // Recorrer el mapa para mostrar cada palabra y su contador
  mapaPalabras.forEach(function(cantidad, palabra) {
    resultado += palabra + ": " + cantidad;
    if (cantidad === 1) {
      resultado += " vez\n";
    } else {
      resultado += " veces\n";
    }
  });
  
  resultado += "</pre>";
  
  // Mostrar en pantalla usando la función del main.js
  mostrarResultado(resultado);
  
  // Mostrar en consola también
  console.log("Mapa de palabras:", mapaPalabras);
}

