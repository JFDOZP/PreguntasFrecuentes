
// Obtenemos los elementos principales del HTML
const formulario = document.getElementById("formulario");
const campoPregunta = document.getElementById("pregunta");
const campoRespuesta = document.getElementById("respuesta");
const listaPreguntas = document.getElementById("listaPreguntas");
const btnGuardar = document.getElementById("btnGuardar");

// Guarda la fila que se está editando; null significa crear una nueva
let filaEditando = null;

// Datos iniciales para mostrar ejemplos
const preguntasIniciales = [
    {
        pregunta: "¿Qué es HTML?",
        respuesta: "Es el lenguaje que permite estructurar el contenido de una página web."
    },
    {
        pregunta: "¿Para qué sirve CSS?",
        respuesta: "Sirve para dar estilos, colores, tamaños y distribución a una página web."
    },
    {
        pregunta: "¿Qué hace JavaScript?",
        respuesta: "Permite agregar interactividad y lógica a las páginas web."
    }
];

// Crea una fila usando nodos DOM y textContent
function crearFila(pregunta, respuesta) {
    const fila = document.createElement("article");
    fila.classList.add("fila");

    // Creamos el botón de la pregunta
    const botonPregunta = document.createElement("button");
    botonPregunta.type = "button";
    botonPregunta.classList.add("pregunta");
    botonPregunta.textContent = pregunta;

    // Creamos el elemento que contiene la respuesta
    const textoRespuesta = document.createElement("div");
    textoRespuesta.classList.add("respuesta");
    textoRespuesta.textContent = respuesta;

    // Creamos el contenedor de los botones de acción
    const acciones = document.createElement("div");
    acciones.classList.add("acciones");

    const btnEditar = document.createElement("button");
    btnEditar.type = "button";
    btnEditar.classList.add("btn-editar");
    btnEditar.textContent = "Editar";

    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.textContent = "Eliminar";

    // Agregamos los botones de acción al contenedor
    acciones.append(btnEditar, btnEliminar);

    // Organizamos los elementos dentro de la fila
    fila.append(botonPregunta, textoRespuesta, acciones);

    return fila;
}

// Muestra un mensaje cuando todavía no existen preguntas
function actualizarMensajeVacio() {
    const mensajeAnterior = listaPreguntas.querySelector(".vacio");

    // Si ya hay preguntas, eliminamos el mensaje vacío
    if (listaPreguntas.children.length > 0) {
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
        return;
    }

    // Creamos el mensaje usando textContent
    const mensaje = document.createElement("p");
    mensaje.classList.add("vacio");
    mensaje.textContent = "Todavía no hay preguntas frecuentes.";

    listaPreguntas.append(mensaje);
}

// Agrega una fila al listado
function agregarPregunta(pregunta, respuesta) {
    const fila = crearFila(pregunta, respuesta);

    // Si existe el mensaje vacío, lo quitamos antes de agregar
    const mensaje = listaPreguntas.querySelector(".vacio");
    if (mensaje) {
        mensaje.remove();
    }

    listaPreguntas.append(fila);
}

// Cargamos las preguntas iniciales
preguntasIniciales.forEach((item) => {
    agregarPregunta(item.pregunta, item.respuesta);
});

// CRUD: crear y actualizar mediante el formulario
formulario.addEventListener("submit", function (evento) {
    // Evitamos que el formulario recargue la página
    evento.preventDefault();

    const pregunta = campoPregunta.value.trim();
    const respuesta = campoRespuesta.value.trim();

    // Validamos que ambos campos tengan contenido
    if (!pregunta || !respuesta) {
        alert("Completa la pregunta y la respuesta.");
        return;
    }

    if (filaEditando) {
        // UPDATE: modificamos el contenido de la fila seleccionada

        // Traversing: el primer hijo de la fila es la pregunta
        const botonPregunta = filaEditando.children[0];

        // Traversing: la respuesta es el siguiente elemento hermano
        const textoRespuesta = botonPregunta.nextElementSibling;

        botonPregunta.textContent = pregunta;
        textoRespuesta.textContent = respuesta;

        // Si se edita una pregunta, cerramos su respuesta
        filaEditando.classList.remove("activa");

        filaEditando = null;
        btnGuardar.textContent = "Crear pregunta";
    } else {
        // CREATE: construimos una nueva fila y la mostramos
        agregarPregunta(pregunta, respuesta);
    }

    // Limpiamos el formulario después de guardar
    formulario.reset();
});

// ÚNICO addEventListener del contenedor: delegación de eventos
listaPreguntas.addEventListener("click", function (evento) {
    const boton = evento.target.closest("button");

    // Ignoramos clics que no provengan de un botón del listado
    if (!boton || !listaPreguntas.contains(boton)) {
        return;
    }

    // Encontramos la fila a la que pertenece el botón pulsado
    const fila = boton.closest(".fila");

    if (!fila) {
        return;
    }

    // READ: mostrar u ocultar la respuesta al pulsar la pregunta
    if (boton.classList.contains("pregunta")) {
        // Traversing: la respuesta sigue inmediatamente a la pregunta
        const respuesta = boton.nextElementSibling;

        // Verificamos que exista la respuesta esperada
        if (!respuesta || !respuesta.classList.contains("respuesta")) {
            return;
        }

        const estabaActiva = fila.classList.contains("activa");

        // Cerramos todas las filas usando children
        Array.from(listaPreguntas.children).forEach((otraFila) => {
            if (otraFila.classList.contains("fila")) {
                otraFila.classList.remove("activa");
            }
        });

        // Abrimos la fila pulsada, salvo que ya estuviera abierta
        if (!estabaActiva) {
            fila.classList.add("activa");
        }

        return;
    }

    // UPDATE: cargar los datos de la fila en el formulario
    if (boton.classList.contains("btn-editar")) {
        // Traversing: localizamos la pregunta y su respuesta
        const botonPregunta = fila.children[0];
        const textoRespuesta = botonPregunta.nextElementSibling;

        campoPregunta.value = botonPregunta.textContent;
        campoRespuesta.value = textoRespuesta.textContent;

        // Guardamos la referencia a la fila que vamos a editar
        filaEditando = fila;
        btnGuardar.textContent = "Guardar cambios";

        // Llevamos al usuario al formulario
        formulario.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        campoPregunta.focus();
        return;
    }

    // DELETE: eliminar la fila seleccionada
    if (boton.classList.contains("btn-eliminar")) {
        const confirmar = confirm(
            "¿Seguro que deseas eliminar esta pregunta?"
        );

        if (!confirmar) {
            return;
        }

        // Si eliminamos la fila que se editaba, reiniciamos el formulario
        if (filaEditando === fila) {
            filaEditando = null;
            formulario.reset();
            btnGuardar.textContent = "Crear pregunta";
        }

        // Eliminamos la fila del DOM
        fila.remove();

        // Actualizamos el mensaje si ya no quedan preguntas
        actualizarMensajeVacio();
    }
});
