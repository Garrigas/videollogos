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

let allTodos = [];