
/**
 * Función que recibe un parametro evento
 * Detecta si se presiona Alt + F12 y cambia el fondo al body del HTML
 * La imagen es de picum.photos
 * Se utiliza Date.now() % 100000 para generar una semilla aleatoria a partir del tiempo actual
 * y se la pasamos a la URL de picsum.photos
 */
function onKeyDown(event) {
    if (event.altKey && event.code === 'F12') {
        const IMAGE_WIDTH = 1800;
        const IMAGE_HEIGHT = 2000;

        // Semilla aleatoria
        const seed = Date.now() % 10000;
        const picsumUrl = `https://picsum.photos/seed/${seed}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;

        // Cambiar el fondo del body
        document.body.style.backgroundImage = `url('${picsumUrl}')`;
        document.getElementById('texto').textContent = `Imagen de fondo cambiada: ${picsumUrl}`;
    }
}

// Inicializar el fondo cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {

    // Poner el fondo por defecto en negro
    document.body.style.backgroundColor = `#000`;

    /**
     * Evento de teclado que recibe la función onKeyDown previamente creada
     * El parametro se le pasa de manera implicita
     * Es lo mismo que: 
     * document.addEventListener('keydown', function(event) { onKeyDown(event); });
     */
    document.addEventListener('keydown', onKeyDown);
});