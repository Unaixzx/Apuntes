<h1 align="center">Pseudoclases y Pseudoelementos<h1>
<hr>

## Contenido

- Pseudoclases
- Pseudoelementos

<hr>

CSS proporciona varios tipos de selectores, para especificar el estado especial del elemento seleccionado. Permite añadir estilos al interactuar con los elementos, añadir nuevos elementos...
La diferencia de las pseudoclases y pseudoelementos es que los pseudoelementos suelen hacer referencia a determinadas partes de un elemento. Las pseudoclases suelen hacer referencia al estado del elemento.

<hr>

### Pseudoclases

Las pseudoclases hacen referencia al estado del elemento.

> Sintaxis: `selector:pseudoclase { propiedad: valor; }`

Lista de pseudoclases más comunes:

- :hover Cuando el cursor pasa por encima del elemento.
- :checked Cuando el elemento esta marcado(checked/selected radio, checkbox, u option)
- :required Cuando los elementos tienen el atributo `required`.
- :optional Cuando los elementos de un formulario no tienen el atributo `required`.
- :disabled Cuando los elementos se encuentran deshabilitados.
- :enabled Cuando los elementos se encuentran habilitados.
- :empty Cuando los elementos no tienen ningún hijo o texto.
- :invalid Cuando los elementos de un formulario no se pueden validar.
- :valid Cuando los elementos de un formulario no se han validado correctamente.
- :visited Enlaces que el usuario ya ha visitado.
- :link Enlaces que el usuario no ha visitado.
- :focus Cuan un elemento recibe el foco. Cuando se hace click o se selecciona con el Tabulador.
- :nth-child() Nos permite seleccionar varios elementos hijos indicando su posición.
  - :nth-child(posición)
  - :nth-child(odd) Para números impares.
  - :nth-child(even) Para números pares.
- :nth-last-child() Igual que :nth-child() PERO cuenta los elementos hacia atrás desde el final.
- :nth-of-type() Nos permite seleccionar varios elementos hijos indicando su posición. Solo cuenta los elementos del mismo tipo.
- :nth-last-of-type() Igual que :nth-of-type() PERO cuenta los elementos hacia atrás desde el final.
- :not() Evitar que se seleccione elementos concretos.
  - :not(h1) Selecciona cualquier elemento que no sea un h1.
- :root selecciona el elemento raíz. Se usa para asignar variables.
- :dir() representa la orientación del texto.
  - :dir(ltr) elementos de izquierda a derecha.
  - :dir(rtl) elementos de derecha a izquierda.

**Ejemplos:**

Cambiar color de un parrafo al pasar el ratón por encima.

```HTML
<!-- HTML -->
    <p class="cambiar-color">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
      cupiditate quaerat similique porro voluptas nesciunt, cum quia harum
      sapiente sed earum consectetur adipisci esse assumenda maxime eligendi
      molestias vero nisi!
    </p>
```

```CSS
/* CSS */
     .cambiar-color:hover {
        color: blue;
      }
```

---

Cambiar color de los elementos de una lista(Pares=rojo; Impares Azul)

```HTML
<!-- HTML -->
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item4</li>
    </ul>
```

```CSS
/* CSS */
     li:nth-child(odd) {
        color: blue;
      }

      li:nth-child(even) {
        color: red;
      }
```

Ocultar y mostrar un parrafo mediante un checkbox.

```HTML
<!-- HTML -->
    <label for="mostrar-ocultar">Pulsa aquí</label>
    <input type="checkbox" name="mostrar-ocultar" id="mostrar-ocultar" />

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas
      quo sint voluptate illo mollitia quam possimus obcaecati atque sunt quos,
      fuga similique inventore ad hic nihil temporibus ea at.
    </p>
```

```CSS
/* CSS */
     #mostrar-ocultar:checked + p {
        display: none;
      }
```

---

### Pseudoelementos

Los pseudoelementos hacen referencia a determinadas partes de un elemento.

> Sintaxis: `selector::pseudoelementos { propiedad: valor; }`

Lista de pseudoclases más comunes:

- ::before se usa para añadir contenido estético a un elemento. Se coloca como primer hijo.
- ::after se usa para añadir contenido estético a un elemento. Se coloca como ultimo hijo.
- ::first-letter aplica estilos a la primera letra de la primera línea. Tiene que ser un elemento bloque.
- ::first-line aplica estilos a la primera línea. Tiene que ser un elemento bloque.
- ::selection aplica estilos a un fragmento seleccionado.
- ::marker aplica estilos a los caracteres/símbolos de una lista.

**Ejemplos:**

Añadir una flecha ->  delante de los `li` a una lista.

```HTML
<!-- HTML -->
    <ul>
      <li>Items1</li>
      <li>Items2</li>
      <li>Items3</li>
      <li>Items4</li>
    </ul>
```

```CSS
/* CSS */
     li::before {
        content: "->";
      }
```

Aumentar tamaño de la primera letra y cambiar el color.

```HTML
<!-- HTML -->
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit
      repellendus libero necessitatibus ratione porro, nobis, doloremque
      expedita est maxime, incidunt iure illum iusto vero reiciendis eos sint
      repellat fuga.
    </p>
```

```CSS
/* CSS */
     p::first-letter {
        color: green;
        font-size: 1.5em;
      }
```

Cambiar el fondo de un texto al remarcarlo con el ratón.

```HTML
<!-- HTML -->
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit
      repellendus libero necessitatibus ratione porro, nobis, doloremque
      expedita est maxime, incidunt iure illum iusto vero reiciendis eos sint
      repellat fuga.
    </p>
```

```CSS
/* CSS */
     p::selection {
        background-color: yellow;
      }
```