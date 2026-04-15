const prompt = require('prompt-sync')();

let x = parseInt(prompt("Informe o valor da forma geométrica: "));
let y = parseInt(prompt("Informe o segundo valor da forma geométrica: "));
let pi = 3.14;

console.log("A área do quadrado é: ", + x * x);
console.log("A área do retângulo é: ", + (x * y / 2));
let r = parseInt(prompt("Informe o raio do círculo: "));

console.log("A área do círculo é: ", + pi * r * r);
