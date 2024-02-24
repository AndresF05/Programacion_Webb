function contarRango(start, end) {
    let count = 0;
    for (let i = start + 1; i < end; i++) {
        count++;
    }
    return count;
}

console.log(contarRango(1, 9));  
console.log(contarRango(1332, 8743)); 
console.log(contarRango(5, 6)); 