<h1 align=center>Multimedia</h1>
<hr>

## Contenido:

- Formulario.
- Input.
- Controles de opción.
- Etiquetado de controles.
- Agrupación de controles.

<hr>

#### Formularios

Para insertar formularios en HTML se utiliza la etiqueta `<form>`. La etiqueta form contiene/agrupa todos los elementos necesarios para la creación de un formulario. Campos para insertar datos, controles de opciones, selectores... Para que un formulario funcione de manera correcta es necesario que tenga un botón para enviar los datos, un atributo method que le indique la forma de envió y un action para remitir los datos.

**Atributos(Más comunes):**

- action: contiene el nombre del agente que procesará los datos remitidos al servidor (por ejemplo, un script de PHP)
- method: define la manera de enviar los datos al servidor. Los valores posibles son:
  - get: los valores enviados se añaden a la dirección indicada en el atributo action.
  - post: los valores se envían de forma separada.
- Si el atributo method no está establecido, el formulario se comporta como si el valor fuera get.

<hr>

#### Input

Los elementos input sirven para crear campos de texto básicos de una sola línea.

> Sintaxis: `<input type="tipo-del-campo">`

**Atributos:**

- type: Asigna un tipo especifico al campo input.
  - Submit: Botón para enviar el formulario.
  - Reset: Restablece los valores iniciales del formulario.
  - Text: Cajas de texto de una sola línea.
  - Password: Para contraseñas.
  - File: Para archivos.
  - Image: Envío gráficos.
  - Hidden: Incluir datos que los usuarios no pueden ver ni modificar.
  - Button: Botón.
  - Number: Solo números.
  - Search: Consultas de búsqueda.
  - Tel: Número de teléfono.
  - Url: Para insertar y editar URL.
  - Email: Para insertar correos.
  - Date: Especial fechas.
  - Time: Horas-Minutos (segundos).
  - Color: Permite a los usuarios especificar un color mediante un control que simula un cuadro cromático.
  - Range: Establecer un Rango.
  - Month: Mes.
  - Week: Semana.
  - Datetime-local: Para ingresar tiempo y fecha (hora, minuto, segundo y fracción de segundo) basado en la zona horaria UTC.
- name: El atributo name se usa para identificar el campo. Sólo se envían los campos que lo tienen.
- value: El atributo value permite establecer el valor inicial de un campo.
- requiered: Indica que el campo es obligatorio. No se enviaran los datos si no se rellena.
- size: Permite establecer la longitud de los controles de texto.
- maxlength y minlength: Permiten establecer la longitud máxima y mínima, respectivamente.
- autofocus: Indica el control que debe tener el foco al cargarse el formulario.

> Estos son algunos de los atributos mas comunes en los elementos `<input>`

**Bonus(Añadir sugerencias a un campo input)**
Podemos añadir sugerencias relevantes que se mostraran mientras escribimos o al hacer click sobre el campo. Se utiliza para mostrar sugerencias, no confundir con los controles de opciones.

<hr>

#### Controles de Opción

Los elementos de control de opciones permiten a los usuarios seleccionar una o más opciones de una lista de valores predefinidos.

**-Checkbox**

El elemento input de tipo `checkbox` permite mediante una caja seleccionar varias opciones. Estos datos se envían en forma de array.

- Se puede hacer uso del atributo `checked` para indicar las opciones.
- Los datos que se envían son el valor que se introduce en el atributo `<name>`.

```HTML
<!-- Ejemplo -->
    <label>Checkbox: (Selecciona tus intereses)</label>

      <input type="checkbox" name="peliculas" /> Películas
      <input type="checkbox" name="deportes" /> Deportes
      <input type="checkbox" name="videojuegos" /> Videojuegos
```

**Radio:**

El elemento `radio` permite mediante un botón circular seleccionar una única opción si tienen el mismo atributo `name`.

- Atributo `name` asocia el valor del selector a la hora de recoger los datos.
- El valor que se envía es el que se encuentra dentro del `value`.

```HTML
<!-- Ejemplo -->
    <label>Radio: (Selecciona un color)</label>
      <br />
      <input type="radio" name="color" value="rojo" /> Rojo
      <br />
      <input type="radio" name="color" value="verde" /> Verde
      <br />
      <input type="radio" name="color" value="azul" /> Azul
```

**Select:**

El elemento `select` permite mediante un desplegable elegir una única opción.

- Atributo `name` asocia el valor del selector a la hora de recoger los datos.
- El valor que se envía es el que se encuentra dentro del `value`.

```HTML
<!-- Ejemplo -->
    <select name="provincia">
        <option value="">Elige Provincia</option>
        <option value="Álava/Araba">Álava/Araba</option>
        <option value="Albacete">Albacete</option>
        <option value="Alicante">Alicante</option>
    </select>
```

<hr>

#### Etiquetado de Controles

Las etiquetas de controles sirven para asociar una descripción corta para los campos.

- El atributo `for` asocia la etiqueta `<label>` con el `id` del campo.
- El `for` y el `id` tienen que coincidir.
- Al hacer click en el `<label>` hace autofocus en el campo.

```HTML
<!-- Ejemplo -->
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" />
```

<hr>

#### Agrupación de controles

Para agrupar los campos de un formulario en grupos y tener una mejor organización HTML dispone de la etiqueta `<fieldset>`. Mediante es uso de la etiqueta `<legend>` podemos asignar un titulo a la agrupación del `<fieldset>`.

```HTML
<!-- Ejemplo -->
<fieldset>
    <legend>Información Personal</legend>
      Nombre: <input name="nombre" type="text" />
      <br />
      <br />
      Apellidos: <input name="apellidos" type="text" />
</fieldset>
```

**Agrupar Select**

Para agrupar en diferentes categorías las opciones de un select podemos hacer uso del elemento `<optgroup label="NombreCategoría">`

```HTML
<!-- Ejemplo -->
<select>
      <option value="">Elija una opción</option>
      <optgroup label="Frontend">
        <option value="">HTML</option>
        <option value="">CSS</option>
        <option value="">JavaScript</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="">Java</option>
        <option value="">PHP</option>
        <option value="">SQL</option>
      </optgroup>
    </select>
```
