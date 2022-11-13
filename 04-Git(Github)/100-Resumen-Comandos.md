<h1 align="center">Repositorios</h1>
<hr>

### Contenido

- Configuración básica
- Repositorios

---

### Repositorios

> #### Comandos:

**Inicializar repositorio(configuración inicial):**

> `git init`

**Hacer seguimiento(a un archivo):**

> `git add nombreArchivo.extension`

**Hacer seguimiento(a un todo):**

> `git add .` [o] `git add -A`

**Comprobar a que hacemos seguimiento(short):**

> `git status -s`

**Hacer commit o crear instantánea:**

> `git commit -m "mensaje descriptivo"`

**Ver los commit o las instantáneas creados:**

> `git log`

O

> `git log --oneline`

**Deshacer los cambios locales(Restaurar):**

> `git reset --hard CódigoInstantánea"`

**Descargar y actualizar el repositorio local:**

> `git pull"`

**Subir repositorio local a Github(origin=nombreRemoto):**

> `git remote add origin http://UrlDeTuProyecto.git`

> `git push -u origin rama`

**Clonar repositorio Github:**

> `git clone URL/HTTPS/Del/Proyecto`

**Etiqueta(tags):**

> Crear la etiqueta/tag: `git tag nombreIdentificativo -m"mensaje de descripción"`
> Subir la etiqueta/tag: `git push --tags`

**Crear Ramas**

> ` git branch nombreDeLaRama`

**Ver Ramas**

> `git branch`

> `git branch --list`

**Moverse a otras Ramas**

> `git checkout nombreDeLaRama`

**Cambiar nombre Ramas**

> `git branch -m nombreAntiguo nuevoNombreDeLaRama`

O

> `git checkout nombreDeLaRama`

> `git branch -m nuevoNombreDeLaRama`

**Eliminar Ramas repositorio local**

> `git branch -d nombre_rama`

**Eliminar Ramas repositorio remoto**

> `git push origin :nombreDeLaRama`

**Unir Ramas**

> `git merge nombreDeLaRama`
