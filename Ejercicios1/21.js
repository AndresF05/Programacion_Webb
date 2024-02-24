function pares(arr) {
    return arr.filter(num => num % 2 === 0);
} 

console.log(pares([1, 2, 3, 4, 5, 6]));
console.log(pares([])); 