var jugador1 = prompt('Hola! Eres el jugador1, escoges piedra, papel o tijera')

var jugador2 = prompt('Hola! Eres el jugador2, escoges piedra, papel o tijera')

// var piedra = "piedra"

// var papel = 'papel'

// var tijeras = 'tijeras'

if ( jugador1 === jugador2 ){
    console.log('Estan sincronizados, escogieron el mismo! Es un empate!');
}else if (jugador1 == 'piedra' && jugador2 == 'papel') {
        console.log('Gana el jugador2')
} else if (jugador2 == 'piedra' && jugador1 == 'papel') {
        console.log('Gana el jugador1')
} else if (jugador1 == 'papel' && jugador2 == 'tijeras') {
        console.log('Gana el jugador2')   
} else if (jugador2 == 'papel' && jugador1 == 'tijeras' ) {
            console.log('Gana el jugador1')
}else if (jugador1 == 'tijeras' && jugador2 == 'piedra' ) {
        console.log('Gana el jugador2')
}else if (jugador2 == 'tijeras' && jugador1 == 'piedra') {
        console.log('Gana el jugador1')
} else {
    console.log ('Intenta nuevamente ingresando Piedra o papel o tijera')
}
