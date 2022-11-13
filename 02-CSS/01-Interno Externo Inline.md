<h1 align="center">CSS: Interno, Externo, En línea<h1>
<hr>

## Contenido

- Interno
- Externo
- En linea(Inline)

<hr>

### CSS Interno

> El CSS interno se agrega en la sección del `<head>` de un documento HTML.
> Al añadir el CSS en la misma página que el HTML no necesita cargar varios archivos. Pero aumenta el tamaño del HTML y puede ralentizar las cargas.

**Ejemplo:**

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Añadir CSS interno -->
    <style>
      h1 {
        color: red;
      }
    </style>

  </head>
  <body>
    <h1>Título de la Página</h1>
  </body>
</html>
```

**Resultado**
![Resultado CSS Interno](img/AgregarCSS.png)

<hr>

### CSS Externo

> El CSS externo es un documento que se tiene que enlazar en la sección del `<head>` de un documento HTML.
> Este método es el mas usado, permite una mayor organización.
>
> Sintaxis: `<link rel="stylesheet" href="ruta/del/archivo/CSS">`

Arquitectura de directorios:

- index.html
- CSS
  - style.css

**Ejemplo:**

```HTML
<!-- Archivo HTML -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css" />
  </head>
  <body>
    <h1>Título de la Página</h1>
  </body>
</html>
```

```CSS
/* Archivo CSS */
    h1 {
        color: red;
        }
```

**El Resultado es el mismo que con el ejemplo Interno.**

<hr>

### CSS en linea(Inline)

> El CSS en linea se aplica directamente en el elemento HTML. mediante el uso del atributo `style=""`
>
> Sintaxis: ` <h1 style="color: red">Título de la Página</h1>`

<hr>

Mi uso:

- CSS Interno: Para ejercicios sencillos y rápidos.(Poco uso le doy)
- CSS externo: Es el que más uso, organiza mejor el código.
- CSS en linea: Para ejercicios sencillos y rápidos que requieran pocos estilos.

<hr>

**Bonus**

Si quieres importar otros archivos CSS dentro de un documento CSS puedes usar `@import url("archivo.css");`
Puedes tener un archivo .css  con todos los colores de la página he importar los colores donde necesites. En esta sección solo quería hacer hincapié en como enlazar HTML y CSS.

