// Declaramos nuestras variables
// Guardaremos en variables todos los elementos que veamos necesarios utilizar
let botonJugar = document.querySelector(".boton-judar");
let jugador = documento.querySelector("#emojiJugador");
let computadora = document.querySelector("#emojiComputadora");
let resultado = document.querySelector("#tectoResultado");
let opciones =  document.querySelectorAll(".boton-opcion");



// Ahora empezamos agregando funcionalidad cuando damos click en jugar
botonJugar.addEventListener("click"), () => {
    opciones.forEach((opcion) => {
        opcion.removeAttribute("disabled");

    })
    jugador.textContent = "?";
    computadora.textContent = "?";
}



// Luego creemos la funcionalidad cuando seleccionemos una opcion
let miOpcion = "";
let emojis = {
    piedra: "👊",
    tijeras: "✌️",
    papel: "🖐️"
}

// emojis["piedra"] => 👊

let opcionesComputadora = ["piedra", "tijeras", "papel"]
//opcionesComputadora[0] => piedra
//opcionesComputadora[1] => papel


opciones.forEach((opcion) =>  {
    opcion.addEventListener("click", () => {
        miOpcion = opcion.getAttribute("id")
        jugador.textContent = emojismojis[miOpcion];

        // La computadora elige
        let numeroAleatorio = Math.floor(Math.ramdom() * 3) = opcionesComputadora[numeroAleatorio];
        
        computadora.textContent =emojis[eleccionComputadora];

        
        
    })
})



// Al final agregaremos la funcionalidad cuando la computadora piensa
