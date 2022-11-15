<h1 align="center"> Operadores </h1>

---

### Operadores

Sirven para realizar cálculos matemáticos, comparar valores, para unir identificadores y literales, para formar expresiones lógica, toma de decisión etc.

### Operadores Aritméticos:

Para realizar operaciones aritméticas simples en tipos de datos primitivos

- Multiplicación \*
- División /
- Modulo o resto %
- Suma +
- Resta -
- Incremento ++
- Decremento --
- Menos Unario -()

### Operadores Combinados

Operadores combinados o compuestos: -=, +=, /= .\*= etc.

```Java
    int a = 2;
    a += 4; // Resultado 6
```

### Operadores Ternario

El operador ternario es una versión abreviada de la sentencia if-else.

`(condición) ? valor1 : valor2;`

`int a = 2 > 3 ? 1 : 2;`

### Operadores Relacionales

Para comprobar relaciones de igualdad, devuelve TRUE o FALSE.

| Operador |     | Utilización |     | Resultado                             |
| :------: | --- | ----------- | --- | ------------------------------------- |
|    >     |     | a > b       |     | verdadero si a es mayor que b         |
|    >=    |     | a >= b      |     | verdadero si a es mayor o igual que b |
|    <     |     | a < b       |     | verdadero si a es menor que b         |
|    <=    |     | a <= b      |     | verdadero si a es menor o igual que b |
|    ==    |     | a == b      |     | verdadero si a es igual a b           |
|    !=    |     | a != b      |     | verdadero si a es distinto de b       |

### Operadores Lógicos

Los operadores lógicos permiten evaluar expresiones lógicas y trabajan con operandos booleanos.

| Nombre |     | Operador |     | Utilización |     | Resultado                                                              |
| :----: | --- | -------- | --- | ----------- | --- | ---------------------------------------------------------------------- | --- | --- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
|  And   |     | &&       |     | A && B      |     | verdadero cuando A y B son verdaderos. Evaluación condicional.         |
|   Or   |     |          |     |             |     | A                                                                      |     | B   |                                                                        | verdadero cuando A o B son verdaderos. Evaluación condicional. |
|  Not   |     | !        |     | !A          |     | verdadero si A es falso.                                               |
|  And   |     | &        |     | A & B       |     | verdadero cuando A y B son verdaderos. Siempre evalúa ambos operandos. |
|   Or   |     |          |     |             |     | A                                                                      | B   |     | verdadero cuando A o B son verdaderos. Siempre evalúa ambos operandos. |
|  XOr   |     | ^        |     | A ^ B       |     | verdadero cuando A y B son diferentes                                  |
