import Custo from "./modules/custo.js"
import Receita from "./modules/receita.js"
import Sorvete from "./modules/sorvete.js"

const TONELADAS = 1

// Sorvete (geometria)
const tamanho = new Sorvete(35, 0.5)
const pesoSorvete = tamanho.calcularPeso()

// Receita
const receita = new Receita()
const qtdeIngredientes = receita.calcularQtdeIngrediente(TONELADAS)
const qtdeSorvete = receita.calcularQtdeSorvete(TONELADAS, pesoSorvete)

console.log(`Quantidade de potes: ${qtdeSorvete}`)
console.log(`=== Ingredientes ===`)
console.table(qtdeIngredientes)

// Custos
const custo = new Custo()
const precosIngredientes = custo.calcularCusto(qtdeIngredientes)

console.log(`=== Custos dos ingredientes ===`)
console.table(precosIngredientes)

const custoTotal = custo.formatar(custo.totalCusto)
const custoUnitario = custo.formatar(custo.calcularCustoPorPote(qtdeSorvete))

console.log(`Custo total: R$ ${custoTotal}`)
console.log(`Custo por pote: R$ ${custoUnitario}`)