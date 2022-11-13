<h1 align="center">Ejercicio Listas y Enlaces</h1>
<hr>

> Mediante el siguiente ejercicios podemos repasar los siguientes temas:

- Listas ordenadas
- Listas desordenadas
- Listas con definiciones.
- Lista de enlaces.

<hr>

### Ejercicios

<hr>

> Crea una lista con tus 4 etiquetas(HTML) favoritas ordenada de mayor a menor y que la posición 1 sea 0.

**Ejemplo:** 4. 3. 2. 0.

#### Solución:

```HTML
    <ol reversed>
        <li>h1</li>
        <li>a</li>
        <li>ul</li>
        <li value="0">img</li>
    </ol>
```

<hr>

> Crea una lista para añadir las definiciones a tus 4 etiquetas favoritas.

#### Solución:

```HTML
    <dl>
      <dt>img</dt>
      <dd>Etiqueta para añadir imágenes.</dd>

      <dt>ul</dt>
      <dd>Etiqueta para incluir listas desordenadas.</dd>

      <dt>a</dt>
      <dd>Etiqueta para incluir enlaces.</dd>

      <dt>h1</dt>
      <dd>Etiqueta para incluir encabezado principal.</dd>
    </dl>
```

<hr>

> Crea un menu de navegación(en el index.html) con una lista desordenada. Como ultimo elemento de la lista añade un enlace que abra en una nueva pestaña tu video favorito de YouTube.
 
 La arquitectura de directorios es la siguiente:

- index.html
- plantillas
  - blog.html
  - informacion.html
  - contacto.html

Ejemplo de como quedaría la lista:
- Blog
- Información
- Contacto
- Video favorito

```HTML
    <ul>
      <li><a href="plantillas/blog.html">Blog</a></li>
      <li><a href="plantillas/informacion.html">Información</a></li>
      <li><a href="plantillas/contacto.html">Contacto</a></li>
      <li>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
          >Video Favorito</a
        >
      </li>
    </ul>
```
