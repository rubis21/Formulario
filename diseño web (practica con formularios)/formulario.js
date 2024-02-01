(function() {
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.querySelector('.error');

    function validarNombre(e) {
        if (nombre.value == '' || nombre.value == null) {
            mostrarError('Por favor completa el nombre');
            e.preventDefault();
        }
    }

    function validarCorreo(e) {
        if (correo.value == '' || correo.value == null) {
            mostrarError('Por favor completa el correo');
            e.preventDefault();
        }
    }

    function validarSexo(e) {
        if (!sexo.value) {
            mostrarError('Por favor completa el sexo');
            e.preventDefault();
        }
    }

    function validarTerminos(e) {
        if (!terminos.checked) {
            mostrarError('Por favor acepta los términos y condiciones');
            e.preventDefault();
        }
    }

    function mostrarError(mensaje) {
        error.style.display = 'block';
        var nuevoError = document.createElement('li');
        nuevoError.textContent = mensaje;
        error.appendChild(nuevoError);
    }

    function mostrarGatito() {
        var imagenGatito = document.createElement('img');
        // En este ejemplo, estoy usando la imagen de un gatito de la siguiente URL
        imagenGatito.src = 'https://placekitten.com/300/200';
        imagenGatito.alt = 'Gatito';
        document.body.appendChild(imagenGatito);
    }

    function validarFormulario(e) {
        error.innerHTML = ''; // Limpiar errores anteriores
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);

        // Llamar a mostrarGatito solo si no hay errores
        if (error.childElementCount === 0) {
            mostrarGatito();
        }
    }

    formulario.addEventListener('submit', validarFormulario);
}());
