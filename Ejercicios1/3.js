function bmi(peso, altura) {
    var indice = peso / altura ** 2;
    if (indice < 18.5) {
        return "Bajo de peso";
    } else if (indice >= 18.5 && indice <= 24.9) {
        return "Normal"; 
    } else if (indice >= 25 && indice <= 29.9) {
        return "Sobrepeso";
    } else if (indice >= 30) {
        return "Obeso";
    } 
}

console.log(bmi(65, 1.8)); 
console.log(bmi(72, 1.6)); 
console.log(bmi(52, 1.75)); 
console.log(bmi(135, 1.7)); 