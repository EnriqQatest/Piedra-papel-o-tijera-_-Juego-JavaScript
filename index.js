// Declaramos nuestras variables
// Guardaremos en variables todos los elementos que veamos necesarios utilizar
let botonJugar = document.querySelector(".boton-jugar");
let jugador = document.querySelector("#emojiJugador");
let computadora = document.querySelector("#emojiComputadora");
let resultado = document.querySelector("#versus");
let opciones =  document.querySelectorAll(".boton-opcion");
let puntajeJugador = document.querySelector("#puntosJugador");
let puntajeComputadora = document.querySelector("#puntosComputadora");
let contadorJugador = 0;
let contadorComputadora = 0;




// Ahora empezamos agregando funcionalidad cuando damos click en jugar
botonJugar.addEventListener("click", () => {
    opciones.forEach((opcion) => {
        opcion.removeAttribute("disabled");

    })
    jugador.textContent = "?";
    computadora.textContent = "?";
})



// Luego creemos la funcionalidad cuando seleccionemos una opcion

let miOpcion = "";
let emojis = {
    piedra: "👊",
    tijeras: "✌️",
    papel: "🖐️"
}

// Computadora

let opcionesComputadora = ["piedra", "tijeras", "papel"]
//opcionesComputadora[0] => piedra
//opcionesComputadora[1] => papel


opciones.forEach((opcion) =>  {
    opcion.addEventListener("click", () => {
        miOpcion = opcion.getAttribute("id")
        jugador.textContent = emojis[miOpcion];

        // La computadora elige
        let numeroAleatorio = Math.floor(Math.random() * 3) 
        let eleccionComputadora = opcionesComputadora[numeroAleatorio];
        
        computadora.textContent = emojis[eleccionComputadora];

        if (miOpcion == eleccionComputadora) {
            resultado.textContent = "EMPATE";
        } else if ((miOpcion == "piedra" && eleccionComputadora == "tijeras") || // ||= o
                   (miOpcion == "tijeras" && eleccionComputadora == "papel") ||
                   (miOpcion == "papel" && eleccionComputadora == "piedra")) {
                    resultado.textContent = "GANASTE";
                    contadorJugador++;
                    puntajeJugador.textContent = contadorJugador;
                   } else {
                    resultado.textContent = "PERDISTE";
                    contadorComputadora++;
                    puntajeComputadora.textContent = contadorComputadora;
                   }    
    })
})





// Al final agregaremos la funcionalidad cuando la computadora piensa
