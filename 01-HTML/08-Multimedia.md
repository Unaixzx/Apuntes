<h1 align=center>Multimedia</h1>
<hr>

## Contenido:

- Imágenes.
  - Picture.
- Videos.
- Audio.
- Iframe.

<hr>

### Imágenes

Para insertar imágenes en HTML se utiliza la etiqueta `<img>`.

> Sintaxis: `<img src="Ruta/de/la/imagen" alt="Descripción de la imagen">`

En la ruta de la imagen se pueden poner imágenes locales, imágenes alojadas en el mismo lugar que el proyecto. O También se pueden poner imágenes externas copiando el enlace de la imagen.

```HTML
<!-- Ejemplo -->
    <img
      src="https://images.unsplash.com/photo-1625467883732-b06f641226d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMHVzZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      alt="anochecer"
    />
```

#### Picture

La etiqueta `<picture>` es un contenedor para agrupar varias opciones para mostrar una imagen. Con esta etiqueta podemos establecer una imagen con diferente extension(png,jpg,WebP), en función del tamaño del dispositivo mostrar una imagen u otra. Al añadir imágenes con diferentes resoluciones podemos crear imágenes responsive de manera sencilla.

- `<picture>`: El contenedor que agrupa los demás elementos.
- `<source>`: Hace referencia a las distintas imágenes.
- `<img>`: Es importante poner una imagen al final por si el navegador no es compatible con `<picture>`

```HTML
<!-- Ejemplo: uso del elemento picture -->

    <picture>
        <source
        media="(min-width:650px)"
        srcset="
            https://images.unsplash.com/photo-1625467883732-b06f641226d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMHVzZXxlbnwwfHwwfHw%3D&w=1000&q=80
        "
        />
        <source
        media="(min-width:465px)"
        srcset="
            https://images.unsplash.com/photo-1625467883732-b06f641226d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMHVzZXxlbnwwfHwwfHw%3D&w=1000&q=80
        "
        />
        <img
        src="https://images.unsplash.com/photo-1625467883732-b06f641226d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMHVzZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Flowers"
        style="width: auto"
        />
    </picture>
```

<hr>

#### Videos

El elemento `<video>` se utiliza para insertar videos. La etiqueta `<video>` puede envolver las etiquetas `<source>`. Las etiquetas `<source>` nos facilita crear una lista con varios formatos compatibles para el video que queremos insertar.

```HTML
<!-- Ejemplo Video -->
<video width="320" height="240" controls>
    <source src="https://player.vimeo.com/external/567282335.sd.mp4?s=6b36bda539f3a3fb1f6106160d843de81b8bae86&profile_id=165&oauth2_token_id=57447761" />
    <source src="video/otro/formato.mp4" type="video/mp4" />
    <source src="video/otro/formato.ogg" type="video/ogg" />
    La etiqueta video no es compatible con tu navegador
</video>
```

**Atributos más usados:**

- src: Especifica la ruta del video.
- controls: Visualizar panel de controles.
- poster: Insertar una imagen de portada.
- autoplay: Se reproduce de manera automática.
- loop: Se reproduce en bucle.
- muted: Aparece en modo silencio.
- preload: Inicia la descarga y almacenamiento en el bufer del vídeo.

<hr>

#### Audio

El elemento `<audio>` funciona de la misma manera que el elemento video, comparten la gran mayoría de atributos.

```HTML
<!-- Ejemplo Audio -->
<audio controls>
    <source src="ruta/del/audio.ogg" type="audio/ogg">
    <source src="ruta/del/audio.mp3" type="audio/mpeg">
</audio>
```

<hr>

#### Iframe

Los iframe permiten insertar pedazos de otras páginas web dentro de nuestra página.

```HTML
<!-- Insertar un video de YouTube -->

<!-- Pasos:
    1. Ir a un video de YouTube
    2. Pulsar en los 3 puntes del video que quieras incrustar
    3.Compartir
    4.Insertar
    5.Copiar el código del Iframe.
    6.Pegar el código en tu página.

 -->

<iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/yg7gZCZ_ODk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```
