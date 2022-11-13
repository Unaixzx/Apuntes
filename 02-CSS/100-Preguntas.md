1- ¿Menciona 3 formas de aplicar CSS y como se incluye?

- Interno: Se incluye con la etiqueta `<style>` dentro del `<head>` en un documento HTML.
- Externo: Se incluye con el elemento `<link rel="stylesheet" href="ruta/del/archivo/CSS">`
- En line: Se incluye con el atributo `style=""` en el elemento que se quiere cambiar el estilo.

2- ¿Se puede incluir archivos CSS dentro de otros archivos CSS?

Si, con `@import url("archivo.css");`.

3-¿Menciona 4 tipos de selectores y su sintaxis?

- Selector universal: `*{propiedad:valor}`
- Selector de tipo: `etiquetaHTML{propiedad:valor}`
- Selector de Clase e ID:
  - `.nombre-de-la-clase{ propiedad: valor}`
  - `#nombre-del-id{ propiedad: valor}`
- Selector de Atributo: `selector[atributo="valor"]{propiedad: valor}`

4- ¿Que hacen los siguientes códigos?

```CSS

    *{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
```

> Cambia la tipografía de todos los elementos.

---

```CSS
    h1,h2,h3,h4{
        font-size: 20px;
    }
```

> Cambia el tamaño de pixels de los elementos h1,h2,h3,h4.

---

```CSS
/*LOS ELEMENTOS LI SON HIJOS DEL UL  */
/*
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item4</li>
    </ul>
*/
      ul + li{
        color: red;
      }

```

> No haría nada. El selector adyacente se aplica a los elementos precedidos no a los hijos.

---

5- ¿Que diferencia hay en usar > y + en un selector?

- (>): Selecciona los elementos hijos.
- (+): Selecciona los elementos que van precedidos.

6- ¿Como se podría cambiar el color a todos los enlaces que tengan el valor cookies e el atributo `href`(que no distinga entre mayúsculas y minúsculas) ?

```CSS
    a[href="cookies"i]{
        color: green;
    }
```

7- ¿Que color se aplicara a los h1?

```CSS
/* CSS */
    h1 {
        color: blue;
      }

      h1 {
        color: red;
      }
```

> Se aplica el color rojo por el orden en cascada que usa CSS.

---

```CSS
/* CSS */
    h1 {
        color: blue !important;
      }

      h1 {
        color: red;
      }
```

> Se aplica el color azul. !important añade la especificidad más alta por tanto no se aplica el orden en cascada.

---

8- ¿Ordena por especificidad de mayor a menor?

> [Selector de ID, Selectores Universales, Selector de elementos o pseudoelementos, Atributo de estilo en línea, Selector de clase, pseudoclase o atributo y Regla !important ]

1. Regla !important
2. Atributo de estilo en línea
3. Selector de ID
4. Selector de clase, pseudoclase o atributo
5. Selector de elementos o pseudoelementos
6. Selectores Universales

9- ¿Que diferencia hay entre Pseudoclases y Pseudoelementos?

Las pseudoclases hacen referencia al **estado del elemento** y los pseudoelementos a determinadas **partes de un elemento**.
Para las pseudoclases se usa :
Para los pseudoelementos se usa ::

10- ¿Menciona 3 pseudoclases y cual seria su uso?

- :hover Aplicar reglas CSS cuando el ratón pasa por encima de un elemento.
- :link Aplicar reglas CSS para los enlaces no visitados.
- :checked Aplicar reglas CSS para los elementos marcados(checked/selected radio, checkbox, u option)

11- ¿Menciona 3 pseudoelementos y cual seria su uso?

- ::before se usa para añadir contenido estético a un elemento. Se coloca como primer hijo.
- ::selection aplica estilos a un fragmento seleccionado.
- ::marker aplica estilos a los caracteres/símbolos de una lista.

12- ¿Diferencia :nth-child() y :nth-of-type(), usa un ejemplo para dejarlo claro?

:nth-child() Cuenta todos los hijos del elemento padre mientras que :nth-of-type() solo cuenta los que son del mismo tipo.

Ejemplo:

```HTML
<!-- HTML -->
<div class="contenedor">
      <h2>Encabezado</h2>
      <p>parrafo 1</p>
      <p>parrafo 2</p>
      <p>parrafo 3</p>
      <p>parrafo 4</p>
    </div>
```

```CSS
      p:nth-child(2) {
        color: red;
      }

      p:nth-of-type(2) {
        color: blue;
      }
```

Resultado:
![Diferencia :nth-child() y :nth-of-type() ](img/nth-child%20nth-of-type.png)

13- ¿Se pueden heredar todas las propiedades?

No, no todas las propiedades se pueden heredar.

14- ¿Menciona 3 propiedades que se puedan heredar y otras 3 que no?

**Se puedan heredar:** color, font-family, font-size.

**No se puedan heredar:** border, margin, width.

15- ¿Como podemos forzar a un elemento hijo para que herede los valores del padre?

Usando `inherit` en la propiedad que queremos forzar la herencia.

16- ¿Indica las áreas internas y las de un modelo de caja(Box Model)?

**Áreas internas:** Contenido, Padding, Border.
**Áreas externas:** Margin, Outline.

17- ¿Cual seria tamaño(ancho y alto) del siguiente elemento?

```CSS
/* CSS */

      div {
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 10px solid;
        margin: 50px;
      }
```

1. 100px ancho y 100px alto.
2. 120px ancho y 120px alto.
3. 140px ancho y 140px alto.
4. 160px ancho y 160px alto.

**Respuesta:** 140px ancho y 140px alto.

18- ¿Como podemos evitar que se sumen el padding y el borde al ancho-alto?

Usando `box-sizing: border-box;`

19- ¿Como podemos adaptar el contenido mínimo de un elemento al tamaño de la caja?

Mediante el uso del valor `min-content` en las propiedades `width:` y `height:`

20- ¿Para que se utiliza la propiedad `overflow:scroll` ?

Se utiliza para visualizar el contenido que se desborda de una caja utilizando una barra de scroll.

21- ¿Como aplicarías un borde(solid) inferior de 10px a un parrafo?

```CSS
    p{
        border-bottom: 10px solid;
      }
```

22- ¿En que zona del elemento se aplican los siguientes valores?

(1) `padding: 30px 50px;`
(2) `padding: 30px 50px 20px 40px;`
(3) `padding: 15px;`

Respuesta:

(1) 30px al top-bottom y 50px al right-left.
(2) 30px al top, 50px al right, 20px al bottom, 40px al left.
(3) 15px al top-bottom-right-left

23- ¿Si tenemos dos elementos sobrepuestos cual estará por encima y que podemos hacer para que el que este en la capa inferior se muestre ?

Se mostrara el elemento por orden de cascada, el ultimo que aparezca se sobrepondrá.
Si queremos que el inferior se muestre, tenemos que aplicar un mayor valor z-index.

23- ¿Que propiedad:valor usarías para ocultar un elemento dejando visible su espacio ocupado?

Con `visibility:hidden`, el elemento no sera visible pero si ocupara espacio

24- ¿Que propiedad:valor tendríamos que usar si queremos que un elemento sea un 50% opaco?

`opacity: 0.5`

25- ¿Dado el siguiente código cual seria el valor en px del line-height?

```CSS
    p{
      font-size: 10px;
      line-height: 2;
    }
```

> El valor en px del line-height es el 200% de 10 = 20px

26- ¿Cual seria el tamaño en px de las siguientes unidades.?
**El elemento padre tiene un font-size: 10px;**

a) 1rem
b) 2rem
c) 1.5em
d) 1em

Resultados:

a) 16px
b) 32px
c) 15px
d) 10px

27- ¿Donde colocarías el link o el import de una lista de fuentes externa?

El link se sitúa en el `head` del documento HTML y el import se sitúa en el documento CSS o dentro de las etiquetas `<style>`.

28- ¿Con que propiedad redondearías una imagen cuadrada?

Con la propiedad `border-radius:50%;`.

29- ¿Si aplicamos una imagen de fondo a una caja y esta no es capaz de rellenar la caja, se repetirá o se mostrara una única abarcando toda la caja?

Por defecto se repetirá la imagen abarcando toda la caja.

30- ¿Que diferencia hay entre los valores cover y contain de la propiedad `background-size`?

Contain muestra la imagen completa sin recortar nada, pero si la imagen no es capaz de abarcar toda la caja rellenara lo que sobre repitiendo la imagen.

Cover muestra la imagen completa recortando partes para adaptarse a la caja.

31- ¿Pon un par de ejemplos sobre el uso de colores para mejorar la accesibilidad web?

- No usar solo colores para resaltar o dar "feedback", añadir texto en cursiva, negrita o subrayado.
- Evitar combinar colores que dificulten la vision.

32- ¿Cual es la diferencia básica entre CSS Grid Layout y CSS Flexbox Layout?

Flexbox para diseños de una dimensión(una fila o una columna).
Grid para el diseño bidimensional(varias filas y columnas).

33- ¿Como se llama el modulo que permite adaptar contenido a diferentes dispositivos mediante puntos de ruptura?

Media query.

34- ¿Diferencia entre `transition` y `animation`?

Las transiciones van de un estado inicial a uno final y las animaciones permiten crear varios estados.

35-¿Se pueden almacenar valores en CSS?

Si, usando variables se pueden almacenar valores.

Guardar el valor: `--nombre-variable: valor;`
Usar el valor: `propiedad: var(--nombre-variable);`
