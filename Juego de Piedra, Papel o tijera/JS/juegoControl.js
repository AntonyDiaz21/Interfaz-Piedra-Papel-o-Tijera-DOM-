const Contenedor = document.querySelector(".ContenedorPrincipal");
const UsuarioOpcion = document.querySelector(".OpcionUsario img");
const OpcionCPU = document.querySelector(".OpcionCPU img");
const resultado = document.querySelector(".resultados");
const Imagenes = document.querySelectorAll(".OpcionImagen");
const BotonSalir = document.getElementById("BotonSalir");

BotonSalir.addEventListener("click", Salir);

//Animación de celebración para victoria
const iniciar = () => {
    setTimeout(function(){
        confetti.start();
    },500);
}
const detener = () => {
    setTimeout(() => {
        confetti.stop();
    }, 4000);
};
// Clase para el juego de piedra, papel o tijera
class Juego {
    constructor() {
        this.opciones = ['Piedra', 'Papel', 'Tijera'];
    }

    jugar(opcionUsuario) {
        const opcionComputadora = this.opciones[Math.floor(Math.random() * 3)];

        OpcionCPU.src = "Img/Piedra.png";  
        UsuarioOpcion.src = "Img/Piedra.png";

        Contenedor.classList.add("espere");

        setTimeout(() => {
            OpcionCPU.src = `Img/${opcionComputadora}.png`;

            UsuarioOpcion.src = `Img/${opcionUsuario}.png`;

            let resultadoJuego = '';
            if (opcionUsuario === opcionComputadora) {
                resultadoJuego = "¡Empate!";
            } else if (
                (opcionUsuario === 'Piedra' && opcionComputadora === 'Tijera') ||
                (opcionUsuario === 'Papel' && opcionComputadora === 'Piedra') ||
                (opcionUsuario === 'Tijera' && opcionComputadora === 'Papel')
            ) {
                resultadoJuego = "¡Ganaste!";
            } else {
                resultadoJuego = "¡Perdiste!";
            }

            // Mostrar el resultado
            resultado.textContent = resultadoJuego;
            if (resultadoJuego  === "¡Ganaste!"){
                resultado.style.color = "green";
                iniciar();
                detener();

            } else if (resultadoJuego === "¡Empate!"){
                resultado.style.color = "#8b5606"; 
            } else{
                resultado.style.color = "red"; 
            }

            // Eliminar clase de espera para detener la animación
            Contenedor.classList.remove("espere");
        }, 1000);
    }
}

// Crear una nueva instancia del juego
const juego = new Juego();

// Agregar los eventos a las opciones del usuario
Imagenes.forEach((imagen) => {
    imagen.addEventListener("click", (e) => {
        const opcionSeleccionada = imagen.querySelector("p").textContent;

        UsuarioOpcion.src = `Img/${opcionSeleccionada}.png`;

        resultado.textContent = "Esperando...";
        resultado.style.color = "#115f9e";

        // Llamar al método jugar
        juego.jugar(opcionSeleccionada);
    });
});

function Salir(){
    confirm("¿Desea Salir de la sesión?")
            // Logica para salir de la sesión
            window.location.href = 'index.html';
}