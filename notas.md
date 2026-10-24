******GUIÓN EXPOSICIÓN******

1. Presentación y explicación del proyecto

Buenos días. Somos el equipo encargado de presentar nuestro proyecto llamado Preguntas Frecuentes, desarrollado con HTML, CSS y JavaScript puro.

Este proyecto consiste en una página web que permite consultar preguntas y visualizar sus respuestas de forma organizada. Además, buscamos que el usuario pueda crear nuevas preguntas, editar las existentes y eliminarlas.

Para lograrlo, aplicamos el concepto de DOM Traversing, que nos permite desplazarnos entre los elementos de la página y manipularlos según la acción que realice el usuario.

Durante esta exposición explicaremos cómo funciona, qué propiedades utilizamos y cómo aplicamos lo aprendido en nuestro código.


2. ¿Qué es DOM Traversing y cómo funciona?

DOM Traversing es una técnica de JavaScript que permite desplazarnos entre los elementos de una página web utilizando las relaciones que existen entre ellos.

Podemos imaginar el DOM como un árbol genealógico, donde hay elementos padres, hijos y hermanos.

Por ejemplo, en nuestro proyecto, una pregunta y su respuesta pueden estar relacionadas como elementos hermanos. Cuando seleccionamos una pregunta, podemos desplazarnos hasta su respuesta utilizando esa relación.

Esto nos permite trabajar directamente con el elemento que necesitamos, sin tener que buscarlo desde todo el documento.


3. ¿Cuándo se aplica y qué propiedades utilizamos?

DOM Traversing se utiliza especialmente cuando tenemos elementos repetidos, como tarjetas, filas, tareas o preguntas, y necesitamos realizar una acción sobre uno específico.

En nuestro proyecto, lo aplicamos para encontrar la respuesta correspondiente a una pregunta y para trabajar con los elementos relacionados.

Entre las propiedades importantes están `children`, que permite acceder a los elementos hijos, y `nextElementSibling`, que permite encontrar el siguiente elemento hermano.

También podemos utilizar `closest()`, que permite subir por el árbol del DOM hasta encontrar un elemento que coincida con un selector.

Estas propiedades hacen que nuestro código sea más organizado y nos ayudan a evitar que una acción afecte elementos que no corresponden.


4. Explicación del código y uso responsable de la IA

Para construir el proyecto utilizamos HTML para organizar las preguntas y respuestas, CSS para definir la apariencia visual y JavaScript para controlar las interacciones.

También utilizamos la inteligencia artificial como apoyo para comprender los conceptos, desarrollar el código por etapas y revisar posibles errores.

Sin embargo, es importante no copiar el código sin entenderlo. Por eso, revisamos las funciones y las propiedades utilizadas para poder explicar su propósito.

Un ejemplo es la delegación de eventos, que consiste en escuchar los clics desde un contenedor común y determinar qué elemento recibió la acción. Esto permite administrar varios botones sin tener que agregar un evento independiente a cada uno.


5. Demostración del proyecto y CRUD

Ahora vamos a demostrar cómo funciona nuestro proyecto.

Primero, seleccionamos una pregunta para mostrar su respuesta. Después, abrimos otra pregunta y comprobamos el comportamiento de las respuestas.

También mostraremos las cuatro operaciones del CRUD.

Crear consiste en agregar una nueva pregunta. Leer consiste en visualizar las preguntas en la página. Actualizar permite editar una pregunta existente y eliminar permite quitar una pregunta de la lista.

Finalmente, probaremos qué sucede al interactuar con la primera pregunta, la última pregunta y, si es posible, una lista vacía, para verificar que el código responda correctamente y no produzca errores en la consola.

Con esto demostramos el funcionamiento del producto y la aplicación práctica de DOM Traversing.


6. Aprendizajes y conclusión

Con este proyecto aprendimos qué es DOM Traversing, cómo funciona y cuándo podemos aplicarlo en una página web.

También fortalecimos nuestros conocimientos de HTML, CSS y JavaScript, especialmente en la manipulación de elementos y en las operaciones de crear, leer, actualizar y eliminar información.

Como equipo, comprendimos la importancia de utilizar la inteligencia artificial de manera responsable, revisar los resultados y entender el código que construimos.

En conclusión, Preguntas Frecuentes nos permitió poner en práctica los conceptos estudiados mediante un ejemplo funcional. Muchas gracias por su atención.