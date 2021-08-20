
class Display {
    constructor (displayValorAnterior, displayValorAtual) {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorAtual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorAtual.includes('.')) return 
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}