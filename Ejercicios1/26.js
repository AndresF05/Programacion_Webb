function imprimirMatriz(matriz) {
    for (let fila of matriz) {
        for (let elemento of fila) {
            console.log(elemento);
        }
    }
}

console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));  