<h1 align="center">Media Query<h1> 
<hr>

### Media Query

Las media query sirven para adaptar la web a diferentes tipos de dispositivos(Movil,Tablet,Ordenador). Creamos diferentes bloque de propiedades CSS para cada determinada condición, se les llama puntos de ruptura. Con cada punto de ruptura establecemos un diseño diferente.
En el diseño web mobile first primero se diseñar la parte para móviles y se va subiendo para dispositivos más grandes. En cambio en el diseño web responsive es al revés de mayor tamaño al pequeño.

**Medidas estándar:**
Medidas orientativas, utiliza las medidas en función a tus necesidades.

- Pequeño: min-width: 460px
- Mediano: min-width: 768px
- Largo: min-width: 768px
- Largo-Plus: min-width: 1280px

Ejemplo: Cambiar el color en cada punto de ruptura

```HTML
<!-- HTML -->
    <div class="wrapper">
      <h1>Texto Prueba</h1>
    </div>
```

```CSS
/* CSS */

 .wrapper {
        width: 500px;
        height: 250px;
        margin: 200px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: grey;
      }

      /* Mobile */

      @media (min-width: 460px) {
        h1 {
          color: teal;
        }
      }

      /* Tablet */

      @media (min-width: 768px) {
        h1 {
          color: tomato;
        }
      }

      /* Desktop */

      @media (min-width: 992px) {
        h1 {
          color: turquoise;
        }
      }

      /* Landscape */

      @media (min-width: 1280px) {
        h1 {
          color: thistle;
        }
      }
```

![Cambiar color en cada punto de ruptura](img/meia-query.gif)