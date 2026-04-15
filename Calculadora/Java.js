var primeiro_valor = document.querySelector("#Num1");
var segundo_valor = document.querySelector("#Num2");
var resultado = document.getElementById("resultado");

function somar() {
    resultado.innerHTML = Number(Num1.value) + Number(Num2.value);
}

function subtrair() {
    resultado.innerHTML = Number(Num1.value) - Number(Num2.value);
}

function multiplicar() {
    resultado.innerHTML = Number(Num1.value) * Number(Num2.value);
}

function dividir() {
    resultado.innerHTML = Number(Num1.value) / Number(Num2.value);
}
