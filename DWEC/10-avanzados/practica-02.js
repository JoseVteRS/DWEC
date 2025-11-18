// Función que recibe milisegundos y devuelve una promesa
function temporizador(milisegundos) {
    return new Promise((resolve, reject) => {
        // Promesa que se resuelve cuando pasa el tiempo indicado
        const promesaExito = new Promise((resolveExito) => {
            setTimeout(() => {
                resolveExito("Tiempo concluido");
            }, milisegundos);
        });

        // Promesa que se rechaza cuando pasa el doble de tiempo
        const promesaError = new Promise((resolveError, rejectError) => {
            setTimeout(() => {
                rejectError("El tiempo no va bien");
            }, milisegundos * 2);
        });

        // Usamos Promise.race para que gane la que se complete primero
        Promise.race([promesaExito, promesaError])
            .then(resultado => resolve(resultado))
            .catch(error => reject(error));
    });
}

// Programa que invoca la función con 5 segundos (5000 ms)
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    
    temporizador(5000)
        .then(resultado => {
            section.textContent = resultado;
        })
        .catch(error => {
            section.textContent = error;
        });
});
