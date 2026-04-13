import Custo from "./models/custo.js"
import Receita from "./models/receita.js"
import Sorvete from "./models/sorvete.js"

const TONELADAS = 1

// Sorvete (geometria)
// ALTERADO: usa peso fixo (ex: 400g)
const tamanho = new Sorvete(400)
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