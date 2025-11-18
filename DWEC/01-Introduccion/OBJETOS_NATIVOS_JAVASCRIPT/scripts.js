/**
 * E1
 */

const convertirBoton = document.getElementById('convertirBoton');
const textoEntrada = document.getElementById('textoEntrada');
const textoInversa = document.getElementById('textoInversa');
const textoMayusculas = document.getElementById('textoMayusculas');
const textoRepetido = document.getElementById('textoRepetido');
const textoInvertidoMayusculas = document.getElementById('textoInvertidoMayusculas');

convertirBoton.addEventListener('click', () => {
  const texto = textoEntrada.value;
  let textoInversaSeparado = ""

  for (let i = texto.length - 1; i >= 0; i--) {
    textoInversaSeparado += texto[i];
  }

  textoInversa.value = textoInversaSeparado;
  textoMayusculas.value = texto.toUpperCase();
  textoRepetido.value = texto.repeat(2);
  textoInvertidoMayusculas.value = textoInversaSeparado.toUpperCase();

});



/**
 * E2
 */
document.getElementById('celda1').textContent = 'H';
document.getElementById('celda2').textContent = 'O';
document.getElementById('celda3').textContent = 'L';
document.getElementById('celda4').textContent = 'A';


/**
 * E3
 */
const textoE3 = document.getElementById('textoE3');
const filaE3 = document.getElementById('filaE3');
const repetirBotonE3 = document.getElementById('repetirBotonE3');

repetirBotonE3.addEventListener('click', () => {
  const texto = textoE3.value.toUpperCase();
  // filaE3.innerHTML = '';
  for (let i = 0; i < texto.length; i++) {
    const celda = document.createElement('td');
    celda.textContent = texto[i];
    filaE3.appendChild(celda);
  }
});


/**
 * E4
 */
const numeroE4 = document.getElementById('numeroE4');
const generarTablaE4 = document.getElementById('generarTablaE4');
const e4bin = document.getElementById('e4bin');
const e4oct = document.getElementById('e4oct');
const e4hex = document.getElementById('e4hex');

generarTablaE4.addEventListener('click', () => {
  const numero = parseInt(numeroE4.value);
  e4bin.textContent = '';
  e4oct.textContent = '';
  e4hex.textContent = '';

  if (!isNaN(numero)) {
    e4bin.textContent = numero.toString(2);
    e4oct.textContent = numero.toString(8);
    e4hex.textContent = numero.toString(16);
  }
});


/**
 * E5
 */
const encontrarMayor = document.getElementById('encontrarMayor');

encontrarMayor.addEventListener('click', () => {
  const numeros = [
    parseFloat(document.getElementById('num1').value),
    parseFloat(document.getElementById('num2').value),
    parseFloat(document.getElementById('num3').value),
    parseFloat(document.getElementById('num4').value),
    parseFloat(document.getElementById('num5').value),
    parseFloat(document.getElementById('num6').value),
    parseFloat(document.getElementById('num7').value),
    parseFloat(document.getElementById('num8').value),
    parseFloat(document.getElementById('num9').value)
  ];

  const mayor = Math.max(...numeros);
  alert(`El número mayor es: ${mayor}`);
});


/**
 * E6
 */
const e6MostrarFechaBoton = document.getElementById('e6MostrarFechaBoton');

e6MostrarFechaBoton.addEventListener('click', () => {
  const fecha = new Date(); // Fecha actual
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  alert(`Hoy es ${fecha.toLocaleDateString('es-ES', opciones)}`);
});


/**
 * E7
 */
const e7diasNacimiento = document.getElementById('e7diasNacimiento');

e7diasNacimiento.addEventListener('click', () => {
  const fechaNacimiento = prompt("Introduce tu fecha de nacimiento (YYYY/MM/DD):");
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const fechaActual = new Date();
  const diferencia = fechaActual - fechaNacimientoDate;
  const diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  alert(`Han transcurrido ${diasTranscurridos} días, aproximadamente, desde que naciste.`);
});


/**
 * E8
 */
const calcularEdadE8 = document.getElementById('calcularEdadE8');
calcularEdadE8.addEventListener('click', () => {
  const fechaNacimiento = new Date(document.getElementById('fechaNacimientoE8').value);
  const fechaActual = new Date();

  if (fechaNacimiento > fechaActual) {
    alert('La fecha de nacimiento no puede ser futura.');
    return;
  }

  let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  alert(`Tienes aproximadamente ${edad} años.`);
});

/**
 * E9
 */
const validarFechaE9 = document.getElementById('validarFechaE9');

validarFechaE9.addEventListener('click', () => {
  const fecha = document.getElementById('fechaE9').value;
  const regex = /^(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/((19|20)?\d{2,4})$/;

  if (regex.test(fecha)) {
    alert('La fecha es válida.');
  } else {
    alert('La fecha no es válida.');
  }
});