<h1 align="center"> Flujos de Control </h1>

---

### Sentencia if/else

Ejecuta un bloque de código si alguna condición es verdadera

```Java
    if(expresion) {
        // ejecuta el bloque de código si cumple la condición
    } else {
        // sentencia a ejecutar si NO se cumple la condición
    }
```

**comparaciones else if**

```Java
    if(expresion) {
        // bloque a ejecutar si cumple la primera condición
    } else if(expresion) {
        // sentencia a ejecutar si cumple segunda condición
    } else {
        // sentencia a ejecutar si NO cumple ninguna condición
    }
```

### Sentencia switch case

Para realizar sentencias condicionalmente basadas en alguna expresión.
Break hace que el control salga de la sentencia switch y continúe con la siguiente línea

```Java
    switch(variable){
        case valor1:
            // ejecuta sentencia 1
        break;
        case valor2:
            // ejecuta sentencia 3
        break;
        case valor3:
            // ejecuta sentencia 3
        break;
        default:
            // Si no existe coincidencia, se ejecuta la sentencia default
    }
```

### Sentencia while

Ejecuta un bloque de código mientras se cumpla la condición

```Java
    if(expresion) {
        // bloque a ejecutar si cumple la primera condición
    } else if(expresion) {
        // sentencia a ejecutar si cumple segunda condición
    } else {
        // sentencia a ejecutar si NO cumple ninguna condición
    }
```

### Sentencia do while

Primero ejecutar la sentencia y al final evalúa la expresión

```Java
    do {
        // ejecuta el bloque al menos una vez
    } while(expresion);
```

### Sentencia for

Se utiliza cuando se conocen los límites del bucle

```Java
    for(inicializacion; condicion; incremento) {
        // el bloque de iteración se ejecuta si cumple la condición
    }
```
