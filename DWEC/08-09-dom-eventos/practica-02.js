document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const formulario = document.getElementById('formulario');
    const boton = document.getElementById('btn-enviar');
    let emailValido = false;
    let passwordValido = false;

    // Función para mostrar/ocultar error
    function mostrarError(campoId, mensaje) {
        const error = document.getElementById(`error-${campoId}`);
        error.textContent = mensaje || '';
        error.style.display = mensaje ? 'block' : 'none';
    }

    // Función para actualizar el botón
    function actualizarBoton() {
        const valido = emailValido && passwordValido;
        boton.disabled = !valido;
        boton.style.backgroundColor = valido ? '' : 'gray';
        boton.style.color = valido ? '' : 'white';
    }

    // Validar email: formato xxxx@yyyy.zzzz
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        const partes = email.split('@');
        emailValido = partes.length === 2 && partes[0] && partes[1].split('.').length === 2;
        mostrarError('email', emailValido ? '' : 'El formato del email debe ser: xxxx@yyyy.zzzz');
        actualizarBoton();
    });

    emailInput.addEventListener('focus', () => mostrarError('email', ''));

    // Validar password: longitud entre 8 y 10 caracteres
    passwordInput.addEventListener('blur', function() {
        const password = passwordInput.value;
        passwordValido = password.length >= 8 && password.length <= 10;
        mostrarError('password', passwordValido ? '' : 'El password debe tener entre 8 y 10 caracteres');
        actualizarBoton();
    });

    passwordInput.addEventListener('focus', () => mostrarError('password', ''));

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        if (emailValido && passwordValido) {
            alert('Formulario enviado correctamente');
        }
    });
});

