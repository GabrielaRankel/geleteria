import Receita from "../models/receita.js"
describe('Teste Unitário da classe Receita', () => {

    test('Teste do cálculo de ingredientes', () => {
        const receita = new Receita()

        const toneladas = 1
        const totalGramas = toneladas * 1000000
        const fator = totalGramas / receita.pesoBase

        const resultado = receita.calcularQtdeIngrediente(toneladas)

        expect(resultado.leite).toBeCloseTo(receita.leite * fator, 3)
    })

})