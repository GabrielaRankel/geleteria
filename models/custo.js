export default class Custo {
    
    // <!-- Ingrendiente 1: LEITE (500 ML)
// Ingrendiente 2: CREME (17O G)
// Ingrediente 3: AÇÚCAR (70 G)
// Ingrediente 4: LEITE EM PÓ (80 G) (80 REAIS)
// Adereço: NUTELLA (80 G) (80 REAIS) -->

// <!-- Leite preço 500 ml: 3 reais
// Creme preço 170 g: 5 reais
// açucar preço 70 g: 0,40 centavos  -->

    constructor(leite = 4.0, creme = 22.0, acucar = 4.0, leiteEmPo = 40.0, nutella = 90.0) {

        this.leite = leite
        this.creme = creme
        this.acucar = acucar
        this.leiteEmPo = leiteEmPo
        this.nutella = nutella

        this.preco = {}
        this.totalCusto = 0
    }

    calcularCusto(qtdeIngredientes) {
        this.preco = {
            leite: (qtdeIngredientes.leite / 1000) * this.leite,
            creme: (qtdeIngredientes.creme / 1000) * this.creme,
            acucar: (qtdeIngredientes.acucar / 1000) * this.acucar,
            leiteEmPo: (qtdeIngredientes.leiteEmPo / 1000) * this.leiteEmPo,
            nutella: (qtdeIngredientes.nutella / 1000) * this.nutella,
        }

        this.somarTotalCusto()
        return this.preco
    }

    somarTotalCusto(){
        const somaBruta = this.preco.leite + this.preco.creme + this.preco.acucar + this.preco.leiteEmPo + this.preco.nutella

        this.totalCusto = Number(somaBruta.toFixed(2))
    }

    calcularCustoPorPote(qtdPotes) {
        if (qtdPotes <= 0) return 0
        return this.totalCusto / qtdPotes
    }

    formatar(valor) {
        return Number(valor.toFixed(2))
    }
}

