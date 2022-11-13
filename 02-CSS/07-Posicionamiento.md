<h1 align="center">Posicionamiento<h1>
<hr>

## Contenido

- Posicionamiento(Position)
- Visibilidad
- Capas, eje Z (z-index)

<hr>

### Posicionamiento

Con la propiedad `position` podemos especificar como se posiciona o se comporta un elemento HTML en el documento. Para posicionar los elementos es importante recordar las zonas de los elementos [enlace](modelodecajas).

**Tipos de posicionamiento**

- position:static
- position:relative
- position:absolute
- position: fixed
- position:sticky

**Static:**
Por defecto los elementos se comportan de forma `static`. Este valor coloca los elementos siguiendo el flujo normal. Es importante saber que NO se pueden usar las propiedades `top,right ,left y bottom`.

**Relative:**
Al igual que `static` posiciona los elementos siguiendo el flujo normal. La diferencia es que usando el valor `relative` podemos posicionar el elemento mediante `top,right ,left y bottom`.
Los elementos se mueven desde la posición inicial.

Ejemplo: Mover la segunda caja(Rosa) left:150px.

```HTML
<!-- HTML -->
    <div></div>
    <div></div>
    <div></div>
```

```CSS
/* CSS */
     div:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: palegreen;
        margin: 10px;
      }

      div:nth-child(2) {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
        position: relative; /* Aplicar posición relativa*/
        left: 150px;
      }

      div:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: paleturquoise;
        margin: 10px;
      }
```

Resultado:
![posición relative](img/relative.png)

> El segundo elemento se desplaza a la izquierda pero el tercer elemento se mantiene en su posición.

---

**Absolute:**
El valor absolute no forma parte del flujo normal. Se posiciona en función de la ventana del navegador o el elemento cercano(excepto elementos `static`). Acepta las propiedades `top,right ,left y bottom`. El resto de elementos ocuparan su posición.

Ejemplo:

```HTML
<!-- HTML -->
    <div></div>
    <div></div>
    <div></div>
```

```CSS
/* CSS */
     div:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: palegreen;
        margin: 10px;
      }

      div:nth-child(2) {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
        position: absolute;
        left: 400px;
      }

      div:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: paleturquoise;
        margin: 10px;
      }
```

Resultado:
![posición relative](img/absolute.png)

> El segundo elemento se desplaza a la izquierda y el tercer elemento ocupa la posición que deja el segundo. Si no se desplazara la caja rosa se sobrepondría en la caja azul.

---

**Fixed:**
El valor `fixed` al igual que `absolute` no forman parte del flujo normal. Fixed no respeta ningún elemento cercano. Si aplicamos el valor fixed este elemento se mantendrá fijo al hacer scroll. Si aplicamos `fixed` sin mover el elemento este se sobrepondrá, y el elemento más cercano ocupara su posición

Ejemplo:

```HTML
<!-- HTML -->
    <div></div>
    <div></div>
    <div></div>
```

```CSS
/* CSS */
     div:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: palegreen;
        margin: 10px;
      }

      div:nth-child(2) {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
        position: fixed;
        top:0px;
        left: 0px;
      }

      div:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: paleturquoise;
        margin: 10px;
      }
```

Resultado:
![posición relative](img/fixed.png)

> El segundo elemento se desplaza a la parte superior izquierda. Si hiciéramos scroll se mantendría en esa posición

---

**Sticky:**
Los elementos `sticky` se comportan como elementos `relative` hasta que alcanzan cierta posición mediante el uso de scroll. Cuando alcanzan dicha posición pasan a comportarse como un elemento `fixed`

Ejemplo:

```HTML
<!-- HTML -->
    <div></div>
    <div></div>
    <div></div>
```

```CSS
/* CSS */
     div:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: palegreen;
        margin: 10px;
      }

      div:nth-child(2) {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: 10px;
        position: sticky;
        top: 0;
      }

      div:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: paleturquoise;
        margin: 10px;
      }
```

Resultado:
![posición relative](img/stiky.gif)

> Al llegar el scroll al top 0 del elemento sticky, este se fija y mantiene su posición.

---

### Visibilidad

Al ocultar un elemento este puede afectar a la posición que ocupa. Puede que el elemento este oculto pero que su espacio que ocupa siga presente en la página. Las dos maneras más usadas para ocultar los elementos son las propiedades `display` y `visibility`.

**display**: Aplicando el valor none. El Elemento no sera visible ni ocupara espacio en el documento.

![display:none](img/none.png)

**visibility**: Aplicando el valor hidden. El elemento no sera visible pero si ocupara espacio en el documento.

![visibility:hidden](img/hidden.png)

---

### Capas (z-index)

Cuando varios elementos se superponen, con la propiedad `z-index` podemos controlar que elementos cubren a otros. Los elementos con mayor valor(numero entero) z-index se sobrepondrán sobre los que menos valor. Para poder aplicar esta propiedad es necesario que los elementos tengan una posición sobrepuesta. Las posiciones `static ` no se pueden sobreponer.

Si no se especifica la propiedad `z-index` se sobrepondrán los elementos por cascada, es decir el ultimo que aparezca.

![Capas por defecto](img/capas-defecto.png)

> Orden en el HTML: 1-Verde, 2-Rosa, 3-Azul.

Ejemplo z-index: Cambiar orden de los valores del ejemplo anterior.

```HTML
<!-- HTML -->
    <div></div>
    <div></div>
    <div></div>
```

```CSS
/* CSS */
     div:nth-child(1) {
        width: 100px;
        height: 100px;
        background-color: palegreen;
        position: absolute;
        z-index: 3;
      }

      div:nth-child(2) {
        width: 100px;
        height: 100px;
        background-color: pink;
        position: absolute;
        left: 250px;
        z-index: 2;
      }

      div:nth-child(3) {
        width: 100px;
        height: 100px;
        background-color: paleturquoise;
        position: absolute;
        left: 300px;
        z-index: 1;
      }
```

Resultado:
![z-index](img/z-index.png)

---
