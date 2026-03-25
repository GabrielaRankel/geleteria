import Sorvete from "./models/Sorvete.js"
import Receita from "./models/Receita.js"
import Custo from "./models/Custo.js"

const botaoCalcular = document.getElementById('botao_calcular')
const botaoLimpar = document.getElementById('btn-limpar')
const areaResultado = document.getElementById('resposta')
const selectTamanho = document.getElementById('tamanho')

const TONELADAS = 1

selectTamanho.addEventListener('change', () => {
    const raioInput = document.getElementById('raio')

    if (selectTamanho.value !== 'custom') {
        raioInput.value = selectTamanho.value
    } else {
        raioInput.value = ''
        raioInput.focus()
    }
})

botaoCalcular.addEventListener('click', () => {

    const raio = Number(document.getElementById('raio').value)
    const altura = Number(document.getElementById('altura').value)

    if (raio <= 0 || altura <= 0) {
        alert("Digite valores válidos para raio e altura!")
        return
    }

    // Geometria
    const pote = new Sorvete(raio, altura)
    const pesoPote = pote.calcularPeso()

    // Receita (AGORA COM TONELADAS)
    const receita = new Receita()
    const qtdeIngredientes = receita.calcularQtdeIngrediente(TONELADAS)
    const qtdeSorvete = receita.calcularQtdeSorvete(TONELADAS, pesoPote)

    // Custos
    const custo = new Custo()
    const precosIngredientes = custo.calcularCusto(qtdeIngredientes)

    const custoTotal = custo.formatar(custo.totalCusto)
    const custoUnitario = custo.formatar(custo.calcularCustoPorPote(qtdeSorvete))

    const relatorioNaTela = `
        <h3>Relatório: ${TONELADAS} Tonelada(s)</h3>
        <p><strong>Rendimento:</strong> ${qtdeSorvete} potes</p>
        <p><strong>Custo total:</strong> R$ ${custoTotal}</p>
        <p><strong>Custo por pote:</strong> R$ ${custoUnitario}</p>
        
        <br>
        <h4>Ingredientes</h4>
        <table>
            <thead>
                <tr>
                    <th>Ingrediente</th>
                    <th>Quantidade (kg)</th>
                    <th>Custo (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Leite</td>
                    <td>${(qtdeIngredientes.leite / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.leite)}</td>
                </tr>
                <tr>
                    <td>Creme</td>
                    <td>${(qtdeIngredientes.creme / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.creme)}</td>
                </tr>
                <tr>
                    <td>Açúcar</td>
                    <td>${(qtdeIngredientes.acucar / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.acucar)}</td>
                </tr>
                <tr>
                    <td>Leite em pó</td>
                    <td>${(qtdeIngredientes.leiteEmPo / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.leiteEmPo)}</td>
                </tr>
                <tr>
                    <td>Nutella</td>
                    <td>${(qtdeIngredientes.nutella / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.nutella)}</td>
                </tr>
            </tbody>
        </table>
    `

    areaResultado.innerHTML = relatorioNaTela
})

botaoLimpar.addEventListener('click', () => {
    document.getElementById('tamanho').value = "35"
    document.getElementById('raio').value = 35
    document.getElementById('altura').value = 0.5

    areaResultado.innerHTML = "<p>Insira os dados e clique em calcular.</p>"
})