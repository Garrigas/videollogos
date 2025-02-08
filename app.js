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

// Constructor para los juegos
function Videojuego(
    nombre, 
    genero, 
    calificacion, 
    favorito, 
    horas, 
    fechaInicio, 
    fechaFin, 
    platinado, 
    fechaPlatinado, 
    imagen
) {
    this.nombre = nombre;
    this.genero = genero;
    this.calificacion = calificacion;
    this.favorito = favorito;
    this.horas = horas;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.platinado = platinado;
    this.fechaPlatinado = fechaPlatinado;
    this.imagen = imagen;
}

let juegos = [];

// Función mejorada para crear tarjetas
function crearTarjeta(juego) {
    const contenedor = document.getElementById("contenedor-juegos");
    
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    
    const contenido = `
        <div class="imagen-container">
            <img src="${juego.imagen}" alt="${juego.nombre}">
        </div>
        <h2>${juego.nombre}</h2>
        <p>Género: ${juego.genero}</p>
        <p>Horas: ${juego.horas}</p>
        <div class="calificacion">${'★'.repeat(juego.calificacion)}</div>
        ${juego.favorito ? '<div class="favorito">❤️ Favorito</div>' : ''}
        <p>Platinado: ${juego.platinado ? '✅ ' + juego.fechaPlatinado : '❌'}</p>
        <p>Jugado entre: ${juego.fechaInicio} - ${juego.fechaFin}</p>
    `;
    
    tarjeta.innerHTML = contenido;
    contenedor.appendChild(tarjeta);
}

// Manejo del formulario mejorado
modalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Obtener todos los valores del formulario
    const nuevoJuego = new Videojuego(
        document.getElementById('game-name').value,
        document.getElementById('game-genre').value,
        document.querySelector('input[name="calificacion"]:checked').value,
        document.getElementById('favorito').checked,
        document.getElementById('horas').value,
        document.getElementById('fecha-inicio').value,
        document.getElementById('fecha-fin').value,
        document.getElementById('platinado').checked,
        document.getElementById('platinado').checked ? document.getElementById('fecha-platinado').value : null,
        // Para la imagen necesitarías manejar FileReader para previsualización
        'placeholder.jpg' // Temporal, implementar carga de imagen
    );
    
    juegos.push(nuevoJuego);
    crearTarjeta(nuevoJuego); // Crear solo la nueva tarjeta
    modal.style.display = 'none';
    modalForm.reset();
});





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

