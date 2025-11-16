// Función para obtener el valor de una cookie por nombre
function getCookie(nombre) {
    let cookies = document.cookie.split(';');
    for(let c of cookies) {
        let [llave, valor] = c.trim().split('=');
        if (llave === nombre) return valor;
    }
    return null;
}

// Función para setear una cookie (guardando 1 mes)
function setCookie(nombre, valor) {
    let date = new Date();
    // 30 días en milisegundos
    date.setTime(date.getTime() + (30*24*60*60*1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = nombre + "=" + valor + expires + "; path=/";
}

document.addEventListener("DOMContentLoaded", function() {
    let contador = 0;

    // Lógica de visitas
    let visitas = parseInt(getCookie("visitas") || "0", 10);

    visitas += 1;

    if (visitas > 10) {
        visitas = 1; // resetear a 1 si se pasa de 10
    }

    setCookie("visitas", visitas);

    let spanVisitas = document.getElementById("visitas");
    if (spanVisitas) {
        spanVisitas.textContent = visitas;
    }
});
