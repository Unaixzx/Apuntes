<h1 align="center">Variables<h1>
<hr>

## Contenido

- Variables
- Alcance o ámbito

<hr>

### Variables

En las variables almacenaremos valores que se repiten, asi evitamos tener que cambiar varias líneas de código si necesitamos modificar un valor. Con las variables podemos almacenar colores, fuentes, tamaños...

**Guardar el valor**

> Sintaxis: `--nombre-variable: valor;`

**Usar Variable**

> Sintaxis: `propiedad: var(--nombre-variable);`

---

### Alcance o Ámbito

El alcance o ámbito de una variable es la zona desde donde podemos acceder(locales o globales).

**Variables Locales** las variables locales se declaran dentro del selector.

```CSS
/* CSS */
      selector {
        --tamanio: 50px;
        font-size: var(--tamanio);
      }
```

**Variables Globales** las variables globales se declaran dentro de la pseudoclase `:root`

```CSS
/* CSS */
      :root{
        --tamanio: 50px;
      }

      selector {

        font-size: var(--tamanio);
      }
```
