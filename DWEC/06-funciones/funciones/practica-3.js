// Práctica 3 - Función filtro con callbacks

// Función filtro que aplica un callback a cada elemento del array
function filtro(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  return array;
}

// CASO 1: Multiplicar cada número por 2
function ejecutarCaso1() {
  let numeros = [1, 2, 3, 4];
  
  console.log("Array original:", numeros);
  
  // Función callback que multiplica por 2
  function multiplicarPor2(numero) {
    return numero * 2;
  }
  
  // Aplicar el filtro
  filtro(numeros, multiplicarPor2);
  
  console.log("Array resultado:", numeros);
  
  // Mostrar en pantalla
  let resultado = "<h3>Caso 1: Multiplicar por 2</h3>";
  resultado += "<p><strong>Array original:</strong> [1, 2, 3, 4]</p>";
  resultado += "<p><strong>Array resultado:</strong> " + JSON.stringify(numeros) + "</p>";
  
  mostrarResultado(resultado);
}

// CASO 2: Convertir palabras a mayúsculas
function ejecutarCaso2() {
  let palabras = ["hola", "mundo", "javascript", "funciones"];
  
  console.log("Array original:", palabras);
  
  // Función callback que convierte a mayúsculas
  function aMayusculas(palabra) {
    return palabra.toUpperCase();
  }
  
  // Aplicar el filtro
  filtro(palabras, aMayusculas);
  
  console.log("Array resultado:", palabras);
  
  // Mostrar en pantalla
  let resultado = "<h3>Caso 2: Convertir a Mayúsculas</h3>";
  resultado += "<p><strong>Array original:</strong> ['hola', 'mundo', 'javascript', 'funciones']</p>";
  resultado += "<p><strong>Array resultado:</strong> " + JSON.stringify(palabras) + "</p>";
  
  mostrarResultado(resultado);
}

// CASO 3: Calcular factorial de cada número
function ejecutarCaso3() {
  let numeros = [3, 5, 7, 4];
  
  console.log("Array original:", numeros);
  
  // Función callback que calcula el factorial
  function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }

    let resultado = 1;

    for (let i = 2; i <= n; i++) {
      resultado = resultado * i;
    }
    
    return resultado;
  }
  
  // Aplicar el filtro
  filtro(numeros, calcularFactorial);
  
  console.log("Array resultado:", numeros);
  
  // Mostrar en pantalla
  let resultado = "<h3>Caso 3: Calcular Factorial</h3>";
  resultado += "<p><strong>Array original:</strong> [3, 5, 7, 4]</p>";
  resultado += "<p><strong>Array resultado:</strong> " + JSON.stringify(numeros) + "</p>";
  resultado += "<p><em>Nota: 3! = 6, 5! = 120, 7! = 5040, 4! = 24</em></p>";
  
  mostrarResultado(resultado);
}

// Función auxiliar para mostrar resultados
function mostrarResultado(contenido) {
  let resultadosDiv = document.getElementById("resultados");
  
  let nuevoResultado = document.createElement("div");
  nuevoResultado.className = "resultado";
  nuevoResultado.innerHTML = contenido;
  
  // Añadir al principio
  if (resultadosDiv.firstChild) {
    resultadosDiv.insertBefore(nuevoResultado, resultadosDiv.firstChild);
  } else {
    resultadosDiv.appendChild(nuevoResultado);
  }
}

