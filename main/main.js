
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const botoesNumeros = document.querySelectorAll('.numero');
const botoesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorAtual);

botoesNumeros.forEach(botao => {
    botao.addEventListener('click', () => {
        display.agregarNumero(botao.innerHTML);
    });
});