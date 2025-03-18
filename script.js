let numeroComputadora = Math.round(Math.random() * 100)+1

let numeroUsuario = document.getElementById('numero_entrada')

let mensaje = document.getElementById('mensaje')


function verificarResultado() {
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
    } else {
        mensaje.textContent = 'El numero debe ser menor'
    }

    console.log("clik")
}
