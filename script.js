let numeroComputadora = Math.round(Math.random() * 100) + 1

let numeroUsuario = document.getElementById('numero_entrada')

let mensaje = document.getElementById('mensaje')
let mensajeNumeroIntentos = document.getElementById('mensajeNumeroIntentos')
let mensajeIntentosQuedan = document.getElementById('mensajeIntentosQuedan')

let opcionSeleccionada = document.getElementById('opciones')
let numeroIntentos = 0

function actualizarIntentos() {

    switch (opcionSeleccionada.value) {
        case 'op01':
            numeroIntentos = 10;
            break;
        case 'op02':
            numeroIntentos = 5;
            break;
        case 'op03':
            numeroIntentos = 3;
            break;
    }

    mensajeNumeroIntentos.textContent = `Tienes ${numeroIntentos} intentos`;
    mensajeNumeroIntentos.style.color = 'white'
}


opcionSeleccionada.addEventListener('change', actualizarIntentos);

function verificarResultado() {
    if (opcionSeleccionada.value === 'selec') {
        mensajeNumeroIntentos.textContent = 'Por favor seleccionar una opción.'
        return
    } else {
        let numeroIngresado = parseInt(numeroUsuario.value)

        if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
            mensaje.textContent = 'Por favor ingresar un número valido.'
            return
        }

        if (numeroIngresado === numeroComputadora) {
            mensaje.textContent = 'Felicitaciones! ¡Has adivinado el número!'
            mensaje.style.color = 'green'
            numeroUsuario.disabled = true
            // return
        } else if (numeroIngresado < numeroComputadora) {
            mensaje.textContent = 'El numero debe ser mayor'
            numeroIntentos--
        } else {
            mensaje.textContent = 'El numero debe ser menor'
            numeroIntentos--
        }

        if (numeroIntentos === 0) {
            mensaje.textContent = `Perdiste! El número era ${numeroComputadora}`
            mensaje.style.color = 'white'
            numeroUsuario.disabled = true
        }
        mensajeIntentosQuedan.textContent = `Te quedan ${numeroIntentos} intentos`
    }

    console.log("clik")
}
