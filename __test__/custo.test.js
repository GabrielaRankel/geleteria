import Custo from "../models/custo.js"
describe('Teste Unitário da classe Custo', () => {

    test('Teste do cálculo de custo total', () => {
        const custo = new Custo()

        const ingredientes = {
            leite: 1000,
            creme: 1000,
            acucar: 1000,
            leiteEmPo: 1000,
            nutella: 1000
        }

        custo.calcularCusto(ingredientes)

        const esperado =
            (ingredientes.leite / 1000) * custo.leite +
            (ingredientes.creme / 1000) * custo.creme +
            (ingredientes.acucar / 1000) * custo.acucar +
            (ingredientes.leiteEmPo / 1000) * custo.leiteEmPo +
            (ingredientes.nutella / 1000) * custo.nutella

        expect(custo.totalCusto).toBeCloseTo(esperado, 2)
    })

})