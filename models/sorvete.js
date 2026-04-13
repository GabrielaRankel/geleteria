export default class Sorvete {
    constructor(peso) { // ALTERADO: agora recebe peso ao invés de raio/altura
        this.peso = peso; // ALTERADO: salva o peso do pote
        this.densidade = 0.6; // RN01

        // ALTERADO: altura fixa baseada no peso
        if (peso === 400) this.altura = 15;
        else if (peso === 900) this.altura = 17;
        else if (peso === 1700) this.altura = 20;
        else throw new Error("Peso inválido");
    }

    calcularVolume() {
        return this.peso / this.densidade; // ALTERADO: volume vem do peso (V = m / d)
    }

    calcularRaio() {
        const volume = this.calcularVolume(); // ALTERADO: usa volume calculado

        // ALTERADO: fórmula invertida do cilindro → r = √(V / (π * h))
        return Math.sqrt(volume / (Math.PI * this.altura));
    }

    calcularPeso() {
        return this.peso; // ALTERADO: agora o peso é fixo
    }
}