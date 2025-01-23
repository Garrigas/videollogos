/**
 * Pagina web donde ire añadiendo los juegos que juegue este año
 * ademas de los juegos que he jugado anteriores años 
 * contara con un boton que al pulsar saldra una ventana emergente con interfez
 * donde preguntara:
 *  - El nombre del juego.
 *  - Genero del juego
 *  - Un metodo de calificacion con estrellas para darle una puntuacion.
 *  - Si es juego favorito o no
 *  - Las horas que le he dedicado al juego.
 *  - La fecha en la que me lo he pasado.
 *  - Un apartado que diga platinado si o no.
 *  - En caso de haberlo platinado la fecha que lo hice.
 *  - Y la imagen del juego.
 *  - Boton para añadir el juego a la biblioteca
 * Una vez que el usuario a añadido el juego este aparecera en pantalla automaticamente con
 * la imagen que el usuario a subido.
 * Una opcion para buscar el juego por nombre y tambien un menu para filtrar por año,  por genero, y si es favarito
 * Uno de los diseños que se podria usar esta en la carpeta de borderAnimated que 
 * lo he sacado del siguiente video: https://youtu.be/i2qjId2QbJw?si=zjDAsL_ohbBYuVXJ
 * o tambien el estilo de este video: https://youtu.be/RZ3tYD4TM0M?si=-MvttXaYvpEPZddi
 */

const form = document.querySelector('form');
const todoInput = document.getElementById('form-input');
const boton = document.getElementById('addbutton');

// Seleccionar elementos del modal
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const modalForm = document.getElementById('modal-form');

let juegos = [];

// Mostrar el modal
boton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    modal.style.display = 'flex'; // Mostrar el modal
});

// Cerrar el modal al hacer clic en la "x"
closeButton.addEventListener("click", function () {
    modal.style.display = 'none'; // Ocultar el modal
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function crearTarjeta(){
    document.getElementById("contenedor-juegos");
}

// Lógica para guardar el formulario del modal
modalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener datos del formulario
    const gameName = document.getElementById('game-name').value;
    const gameGenre = document.getElementById('game-genre').value;

    // Agregar el juego a la lista
    juegos.push({ name: gameName, genre: gameGenre });

    // Cerrar el modal
    modal.style.display = 'none';

    for (let juego of juegos) {
        const tarjeta = document.createElement('div'); // Crea un nuevo div para la tarjeta
        tarjeta.classList.add('tarjeta'); // Clase para estilos
        
        const titulo = document.createElement('h2'); // Nuevo h2 para el nombre del juego
        titulo.textContent = juego.name; // Asigna el nombre del juego
        tarjeta.appendChild(titulo); // Añade el título a la tarjeta
    
        const genero = document.createElement('p'); // Nuevo p para el género del juego
        genero.textContent = `Género: ${juego.genre}`;
        tarjeta.appendChild(genero); // Añade el género a la tarjeta
    
        document.getElementById('contenedor-juegos').appendChild(tarjeta); // Añade la tarjeta al DOM
    }
    // Después de agregar el juego al array
    const nuevoJuego = juegos[juegos.length - 1]; // Último juego agregado
    //crearTarjeta(nuevoJuego); // Llama a una función para crear y mostrar la tarjeta
});
