export default class Receita {
    constructor(leite = 500, creme = 170, acucar = 70, leiteEmPo = 80, nutella = 80) {

        this.leite = leite;
        this.creme = creme;
        this.acucar = acucar;
        this.leiteEmPo = leiteEmPo;
        this.nutella = nutella;

        this.pesoBase = this.leite + this.creme + this.acucar + this.leiteEmPo + this.nutella;

        this.receita = {};
        this.totalSorvete = 0;
    }

    calcularQtdeIngrediente(toneladas) {
        const totalGramas = toneladas * 1000000;
        const fatorEscala = totalGramas / this.pesoBase;

        this.receita = {
            leite: this.leite * fatorEscala,
            creme: this.creme * fatorEscala,
            acucar: this.acucar * fatorEscala,
            leiteEmPo: this.leiteEmPo * fatorEscala,
            nutella: this.nutella * fatorEscala,
        };

        return this.receita;
    }

    calcularQtdeSorvete(toneladas, pesoUnitario) {
        const totalGramas = toneladas * 1000000;

        this.totalSorvete = Math.floor(totalGramas / pesoUnitario);

        return this.totalSorvete;
    }
}