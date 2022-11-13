<h1 align="center">Modelo de cajas<h1>
<hr>

## Contenido

- Modelo de cajas
- Comportamiento de cajas
- Extrínseco
- Intrínseco
- Zonas de un elemento
- Regular la visibilidad de los contenido

<hr>

### Modelo de cajas

El modelo de caja o "box model" hace referencia a las diferentes areas que delimitan el contenido. En los navegadores todo se construye a partir de cajas(rectangulares).
Si a un elemento que tiene ancho y alto de 200px, le aplicamos un padding 20px y un borde 20px el elemento terminara ocupando un ancho de 240px x 240px de alto.

**Áreas del modelo de cajas**

- **contenido**: La parte interior de la caja.
- **padding(relleno)**: La parte interior de la caja que separa el contenido del borde.
- **margin(margen)**: Espacio que queda a cada uno de los cuatro lados externos de una caja.
- **border(borde)**: Es el limite que separa el interior(Contenido,Padding) del exterior.
- **outline(contorno)**: Son dibujados por encima del elemento.

![Áreas del modelo de cajas](img/areas-box-model.png)

---

**Border vs Outline**

> Los outline no ocupan espacio, no suma en el tamaño de la caja y no hay movimiento o desplazamiento de los elementos como con border.

Ejemplo: Aplicando un borde(azul) y un outline(verde)

```HTML
<!-- HTML -->
    <div class="caja"></div>
```

```CSS
/* CSS */
     .caja {
        width: 200px;
        height: 200px;
        background-color: crimson;
        border: 10px solid blue; /* Línea azul uniforme*/
        outline: 10px dashed green; /* Línea verde punteada*/
      }
```

Resultado:
![Border vs Outline](img/border-outline.png)

---

### Comportamiento de cajas

Las cajas tienen un comportamiento diferente según su display, sus dimensiones establecidas y el contenido que esta dentro de ellas. Se pueden controlar estos comportamientos mediante el uso de tamaño extrínseco e intrínseco.

**Extrínseco:**

> Son las medidas fijas, cuando añadimos tamaños fijos al ancho o al alto de un elemento.

Ejemplo: tamaño fijo de la caja.

```HTML
<!-- HTML -->
    <p class="extrinseco">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
      voluptates consequatur
    </p>
```

```CSS
/* CSS */
     .extrinseco {
        width: 100px;
        height: 50px;
        padding: 20px;
        border: 1px solid;
      }
```

Resultado:
![extrínseco](img/extrinseco.png)

**Intrínseco:**

> Son las medidas relativas, cuando el tamaño depende del contenido del elemento.

Ejemplo: adaptar tamaño a la caja con `width:min-content, height:min-content`.

- **width:min-content:** Adaptar el ancho-mínimo de la caja a su contenido.
- **height:min-content:** Adaptar el alto-mínimo de la caja a su contenido.

```HTML
<!-- HTML -->
    <p class="intrinsico">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
      voluptates consequatur.
    </p>
```

```CSS
/* CSS */
     .intrinsico {
        width: min-content;
        height: min-content;
        padding: 20px;
        border: 1px solid;
      }
```

Resultado:
![intrínseco](img/intrinsico.png)

---

### Zonas de un elemento

Para poder concretar más a la hora de aplicar ciertas propiedades(margin,padding,border...) se puede hacer referencia a las zonas del elemento.

- Top: Parte superior del elemento.
- Right: Parte derecha del elemento.
- Bottom: Parte inferior del elemento.
- Left: Parte izquierda del elemento.
- Center: Parte central del elemento.

![Zonas de un elemento](img/zonas-elemento.png)

Ejemplos:

> Aplicar margen solo a la parte superior: `margin-top: valor`
> Aplicar padding solo a la parte izquierda: `padding-left: valor`
> Aplicar borde solo a la parte inferior: `border-bottom: valor`

**Zonas abreviadas**
Cuando se usan las propiedades abreviadas o no se concretan la zona, las referencias a estas zonas se aplican empezando por el top y siguiendo las agujas del reloj(top>right>bottom,left). También se puede juntar las zonas en dos grupos top-bottom y right-left.

Ejemplos con la propiedad `margin`.

```CSS
/* Diferentes maneras de aplicar estilos */
/* -------------------------------------- */
/* Aplicar un margen a todas las zonas de un elemento */
  margin: 50px; /*Esto aplica 50px al top-right-bottom-left*/

/* Agrupar top-bottom y right-left */
  margin: 100px 50px; /*Esto aplica 100px al top-bottom y 50px right-left*/

/* Aplicar un margen a cada zona de manera abreviada */
  margin: 10px 20px 30px 40px;
/*Esto aplica:
  - 10px al top.
  - 20px al right.
  - 30px al bottom.
  - 40px al left.
 */

```

---

**Box-Sizing**
Por defecto CSS aplica `box-sizing: content-box` al modelo de caja. Esto significa que no incluye `padding` ni `border` al calcular el ancho-alto del elemento.
Si queremos que el elemento ocupe 200px x 200px incluyendo bordes y padding tenemos que aplicar la propiedad `box-sizing:` con el valor `border-box`.

Esta propiedad se suele aplicar a todos los elementos de manera global: [Snippet de Paul Irish](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

**box-sizing: content-box**

```CSS
/* CSS */
    div {
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 10px solid;
        margin: 40px;
        box-sizing: content-box; /* Se aplica por defecto*/
      }
```

![intrínseco](img/content-box.png)

**box-sizing: border-box**

```CSS
/* CSS */
    div {
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 10px solid;
        margin: 40px;
        box-sizing: border-box;
      }
```

![intrínseco](img/border-box.png)

### Regular la visibilidad de los contenido

Con la propiedad `overflow` podemos regular la visibilidad del contenido que sobre sale de una caja. Si el contenido sobresale(se desborda) de la caja, se mostrara una barra que permita hacer scroll. Se usa para elementos de tipo bloque.

**Valores de la propiedad Overflow**

- overflow:hidden hace que el contenido que sobresale de la caja no sea visible.
- overflow:visible hace que el contenido si no entra se salga de la caja
- overflow:scroll crea una barra de scroll. Por defecto la barra sera lateral.

**Ejes de la propiedad Overflow**

Se puede controlar el desborde del contenido con las propiedades `overflow-x` y `overflow-y`. En función de por donde desborde el contenido se usara una u otra. Estas propiedades hace uso de los mismos valores que `overflow`. Evita tener que aparezcan las dos barras de scroll cuando solo quieres usar una.

- overflow-x: Para controlar el contenido que se desborda horizontalmente(Eje X)
  - Ten en cuenta que si el texto tiene espacios se acomodara verticalmente.
- overflow-y: Para controlar el contenido que se desborda verticalmente(Eje Y)

Ejemplo: Desbordamiento Horizontal.

```HTML
<!-- HTML -->
      <div>qwertyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
```

```CSS
/* CSS */
     div{
        width: 100px;
        height: 100px;
        border: 1px solid;
        overflow-x: scroll;
      }
```

Resultado:
![overflow-x](img/overflow-x.gif)

### Elementos en bloque o en línea

Si necesitas recordar conceptos sobre los elementos en bloque o en línea. [Enlace](html/docu).

Con CSS podemos cambiar el comportamiento de los elementos usando la propiedad `display`.
Con la propiedad display también se puede controlar el diseño de flujo `grid` y `flex` pero estos valores tendrán su apartado propio.

**Valores:**

- block: Los elementos se comportan como elementos en bloque.
- inline: Los elementos se comportan como elementos en linea.
- inline-block: Se comportan como elementos en línea, no ocupan espacio horizontal pero mantienen la propiedad block.
