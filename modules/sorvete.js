export default class Sorvete {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
        this.densidade = 0.6; // RN01
    }

    calcularVolume() {
        if (this.raio <= 0 || this.altura <= 0) {
            throw new Error("Raio e altura devem ser maiores que zero");
        }

        return Math.PI * Math.pow(this.raio, 2) * this.altura;
    }

    calcularPeso() {
        return this.calcularVolume() * this.densidade;
    }
}