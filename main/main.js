
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');


const calculadora = new Calculadora();

console.log(calculadora.somar(2,3))
console.log(calculadora.subtrair(2,3))
console.log(calculadora.multiplicar(2,3))
console.log(calculadora.dividir(2,3))
