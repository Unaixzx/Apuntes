<h1 align="center">Reset<h1>
<hr>

## Contenido

- Reset
- Selector universal
- Reset de terceros
- Normalize

<hr>

### Reset

Una hoja de estilos "reset", son un grupo de reglas que sirven para establecer unos valores iniciales. Cada navegador aplica por defecto unos valores determinados, esto hace que no se visualice igual una página. Sin una hoja de restablecimiento(reset) al maquetar, el motor de renderizado del navegador aplicara sus propios `margin, padding, border, display...`. Como no todos los navegadores usan el mismo CSS predeterminado, al usar una hoja de estilos "reset" nos dará un resultado más predecible. Podemos crear nuestro propio "reset" o utilizar una hoja de estilo de terceros. Tanto si usamos un reset propio como uno de terceros es importante saber que propiedades corrige para poder maquetar correctamente. Procura cargar el CSS "reset" antes que el resto de hojas de estilo.

### Selector universal

Seguramente ya has visto este código en varias hojas de estilo:

```CSS
/* CSS */

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
```

Esto esta bien como via rápida para ejercicios y practicas sencillas con poco código. Pero recuerda que esta aplicándose a todos los elementos y lo más recomendado es aplicar a los elementos que lo necesiten. Hay que evitar en todo lo posible añadirse trabajo adicional.

### Reset de terceros

El [Reset de Meyer](https://meyerweb.com/eric/tools/css/reset/), Eric A.Meyer fue uno de los primeros en compartir una hoja de restablecimiento para CSS. Como indican en su propia web, estos estilos de reinicio son muy genéricos. Por este motivo recomiendan que modifiques el archivo ajustándolo a tu proyecto, que lo uses como un punto de partida.

El [Reset de Richard Clark](http://html5doctor.com/html-5-reset-stylesheet/), Richard Clark modifico el reset de Meyer adaptándolo a HTML5. Si observas el código veras que añade elemento y atributos de selector que no se encuentran en el de Meyer.

> Existen muchísimas hoja de restablecimiento busca la que mejor se adapte a tu proyecto o crea el tuyo propio ajustándolo a tus necesidades.

### Normalize

[Normalize](https://necolas.github.io/normalize.css/) no es un CSS reset como tal, no restablece todos los estilos por defecto pero si hace que sea mas consistente en múltiples navegadores. Su objetivo es igualar los motores de renderizado de los diferentes navegadores.
