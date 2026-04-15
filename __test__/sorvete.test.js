import Sorvete from "../models/sorvete.js"
describe('Teste Unitário da classe Sorvete', () => {

    test('Teste do cálculo de volume', () => {
        const sorvete = new Sorvete(400)
        const volume = 400 / 0.6

        expect(sorvete.calcularVolume()).toBeCloseTo(volume, 3)
    })

})