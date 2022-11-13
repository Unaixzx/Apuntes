<h1 align=center>Elementos, Etiquetas y Atributos</h1>
<hr>

## Contenido:

- Anatomía de un Elemento.
- Etiquetas.
- Atributos.

## -Anatomía de un Elemento

> La mayoría de elementos en un HTML están formados por una etiqueta de apertura, unos atributos, el contenido y una etiqueta de cierre.

```HTML
Ejemplo: <!-- La etiqueta <p></p> que se utiliza para inserta párrafos. -->

<p class="texto"> Contenido </p>


```

#### Partes del elemento:

- Etiqueta de apertura: `<p>`
- Atributos: `<class=”texto”>`
- Contenido: `Contenido dentro de las etiquetas. Este contenido se mostrará directamente en la web.`
- Etiqueta de cierre: `</p>`

<hr>

## -Etiquetas:

> Las etiquetas nos permiten definir los elementos del documento y decir al navegador que queremos insertar, un encabezado, un párrafo, una imagen, un video…

#### Etiquetas que forman la anatomía de un documento HTML:

- `<!DOCTYPE html>` indica el tipo y el estándar del documento HTML.
- `<html>` es la raíz del documento, agrupa todos los elementos del documento y establece el idioma.
- `<head>` agrupa los metadatos, el titulo de la web, enlaces de recursos y CSS en linea.
- `<body>` recoge dentro de sus etiquetas **todo el contenido que quieres que se muestre en la web**. También agrupa código de javascript y php en linea.

```HTML
<!-- Ejemplo de la anatomía básica de un documento HTML -->

<!DOCTYPE html>
<html lang="es"> <!-- lang => Atributo para definir el lenguaje  -->
<head>
    <meta charset="UTF-8"> <!-- charset => el tipo de codificación -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- http-equiv => Los servidores HTTP utilizan este atributo para obtener información sobre los encabezados del mensaje de respuesta HTTP -->
    <!-- content="IE=edge => permiten al navegador mostrar las páginas web que no cumplen con los estándares -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- con este metadato se define qué área de pantalla está disponible al renderizar un documento, nivel de escalado y el zoom que debe mostrar inicialmente-->
    <title>Titulo de la Pagina</title>
</head>
<body>

</body>
</html>

```

#### Etiquetas para estructurar el documento:

- `<header>` Se utiliza para definir la cabecera la página web. Suele contener el menú de navegación y el logotipo.
- `<nav>` Se utiliza para definir la navegación de la web.
- `<main>` Se usa para definir el contenido principal del documento(Se suele usar uno por documento).
- `<section>` Se utiliza para representar una sección genérica de un documento.
- `<article>` Se utiliza para representar secciones que no sean genéricas, a modo de artículos independientes como en las revistas.
- `<aside>` Se utiliza para alojar el contenido que tiene menos importancia de la web.
- `<footer>` Se utiliza para definir el pie de la pagina.
- `<div>` Crea un contenedor genérico para agrupar todo tipo de contenido.
- `<hr>` Crea una linea horizontal como separador de secciones.
- `<br>` Crea una salto de linea.
- `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` Encabezados, van de mayor a menor importancia (h1>h6).

#### Etiquetas para texto:

- `<p>` Etiqueta para escribir párrafos de texto. Puede contener otras etiquetas de texto como `<span>,<strong>,<small>,<cite>,<mark>...`
- `<strong>` Dar importancia al texto.
- `<small>` Quitar importancia al texto.
- `<cite>` Para citar el titulo de la obra.
- `<span>` Se usa para atribuir atributos a un texto.
- `<mark>` Marcar y resaltar texto.
- `<blockquote>` Para indicar que el contenido es texto citado.
- `<pre>` Conservar el formateo del texto.
- `<sub>` Añadir un subindice.
- `<sup>` Añadir un superindice.
- `<a>` Agregar un enlace a un texto. También se puede añadir enlaces a imágenes.

#### Etiquetas para listas:

- `<ol>` Crear una lista ordenada.
- `<ul>` Crear una lista des-ordenada.
- `<li>` Recogen el contenido de un elemento de una lista, ya sea una lista ordenada o des-ordenada.
- `<dl>` Crear una lista de definiciones.
- `<dt>` Especificar el termino.
- `<dd>` Añadir detalles de la descripción.

#### Etiquetas para multimedia:

- `<img>` Para insertar imágenes.
- `<picture>` Agrupar imágenes con distintas extensiones o distintas imágenes.
- `<figure>` Para insertar imágenes con un pie de imagen que van juntos en el mismo elemento.
- `<video>` Para insertar videos.
- `<audio>` Para insertar audios.
- `<embed>` Para insertar contenido de otras web-aplicaciones.
- `<svg>` Para insertar imágenes vectorizadas.
- `<source>` Para insertar recursos alternativos a videos y audios.

#### Etiquetas para tablas:

- `<table>` Para insertar una tabla.
- `<thead>` Define la sección del encabezado de la table.
- `<tbody>` Define la sección del cuerpo de la tabla.
- `<tfoot>` Define la sección del pie de la tabla..
- `<tr>` Para insertar filas en la tabla.
- `<td>` Para insertar columnas en la tabla.
- `<th>` Para insertar el encabezado de las celdas de la tabla.
- `<caption>` Para insertar el título de la tabla.
- `<colgroup>` Para agrupar las columnas de la tabla.

#### Etiquetas para formularios:

- `<form>` Para insertar una formulario.
- `<input>` Inserta un campo para introducir datos.
- `<label>` Para definir el nombre de los campos.
- `<select>` Para mostrar un conjunto de opciones.
- `<option>` Se usa dentro del `<select>` para insertar las opciones que mostrar.
- `<fieldset>` Agrupa los elementos de un formulario pintando un recuadro al rededor de ellos.
- `<legend>` Para insertar un titulo en el `<fieldset>`.
- `<button>` Para insertar un botón que envié el formulario `<fieldset>`.

<hr>

## -Atributos:

> Los atributos de un elemento sirven para añadir valores adicionales, controlar el comportamiento y modificar elementos. Existen atributos requeridos, opcionales, globales y de evento.

Los atributos requeridos y opcionales modifican elementos concretos, mientras que los globales se pueden aplicar a la mayoría de elementos. Los atributos de evento permiten que los elementos ejecuten scripts en ciertas situaciones. Este tipo de eventos se usan generalmente con JavaScript.

#### -Atributos requeridos:

> Como su propio nombre indica son atributos requeridos para que el elemento funcione.

```HTML
<!-- Para que una imagen funcione es necesario que lleve el atributo src -->
<img src="ruta/de/la/imagen.png">

<!-- Para que un enlace funcione es necesario que lleve el atributo href -->
<a href="ruta/del/enlace">Pincha aquí</a>
```

#### -Atributos Opcionales:

> No son necesarios para que el elemento funcione pero ayudan a mejorar su uso.

```HTML
<!-- Para que una imagen funcione no es necesario que lleve el atributo alt pero es recomendado. -->
<img src="ruta/de/la/imagen.png" alt="Descripción de la imagen">

```

#### -Atributos Globales:

> Estos atributos se pueden usar para cualquier etiqueta.

- **class:** Añadir una clase al elemento.
- **id:** Añadir un identificador ÚNICO al elemento.
- **style:** Añadir estilo en linea al elemento.
- **title:** Establecer un titulo al elemento.

```HTML
<!-- Ejemplo -->
    <p class="bordes-rosas" id="parrafoUnico"></p>

    <img class="bordes-rosas" id="imagenUnico" src="ruta/de/la/imagen.png">
```

#### -Atributos de Evento:

> Estos atributos se usan con generalmente con JavaScript, añaden eventos y funciones a los elementos. Estos atributos se suelen asociar a funciones que ejecuten lo que hacer en caso de que se ejecute el evento.

_Algunos ejemplos:_

- **onclick:** Ejecuta la acción cuando se realiza un clic sobre el elemento.
- **onmousedown:** Ejecuta la acción cuando se detecta el botón pulsado del ratón.
- **onmouseup:** Ejecuta la acción cuando se detecta que se ha soltado el botón del ratón.
- **onload:** Ejecuta la acción cuando se carga el documento
- **onresize:** Ejecuta la acción cuando se ha modificado el tamaño de la ventana del navegador
- **onfocus:** Ejecuta la acción cuando el elemento obtiene el foco bien sea a través del ratón o por navegación tabulada.
- **onsubmit:** Ejecuta la acción cuando el formulario es enviado.

```HTML
<!-- Ejemplo -->
 <p onclick="funcion()">Texto de relleno</p>

 <script>
    funcion(){
        //TODO Acción para el evento.
    }
 </script>   
```

> **Como no todos los atributos valen para todas las etiquetas. Es mas fácil verlos de forma individual, cuando veamos listas,tablas,multimedia,texto...**
