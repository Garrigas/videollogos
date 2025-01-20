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
 * 
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

    // Mostrar en consola
    console.log(juegos);
});
