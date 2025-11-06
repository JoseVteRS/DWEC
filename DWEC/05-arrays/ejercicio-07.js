function generarCombinacion() {
    const combinacion = [];
    
    // Generamos 6 números aleatorios sin repetir
    while (combinacion.length < 6) {
      // Generamos un número aleatorio entre 1 y 49
      const numero = Math.floor(Math.random() * 49) + 1;
      
      // Verificamos que el número no esté ya en la combinación
      if (!combinacion.includes(numero)) {
        combinacion.push(numero);
      }
    }
    
    // Ordenamos los números de menor a mayor
    combinacion.sort(function(a, b) {
      return a - b;
    });
    
    return combinacion;
  }
  
  for (let i = 0; i < 50; i++) {
    const combinacion = generarCombinacion();
    console.log("Combinación " + (i + 1) + ": " + combinacion.join(", "));
  }