¿Cómo funciona el DOM Traversing?
Estas son las propiedades y métodos principales que usamos en el proyecto.

children

Obtiene los elementos HTML hijos directos de otro elemento.


javascript
listaPreguntas.children
Lo utilizamos para recorrer todas las filas y cerrar sus respuestas antes de abrir otra.

nextElementSibling

Obtiene el siguiente elemento hermano del elemento actual.


javascript
botonPregunta.nextElementSibling
Lo usamos para acceder a la respuesta que está justo después de la pregunta, sin buscarla en todo el documento.

event.target y closest()

Permiten identificar qué botón se pulsó y encontrar su fila.


javascript
const boton = evento.target.closest("button");
const fila = boton.closest(".fila");
Esto permite manejar los clics de todas las filas con un único listener en el contenedor.