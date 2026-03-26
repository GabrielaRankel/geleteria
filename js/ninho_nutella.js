import Sorvete from "../modules/Sorvete.js"
import Receita from "../modules/Receita.js"
import Custo from "../modules/Custo.js"

const botaoCalcular = document.getElementById('botao_calcular')
const botaoLimpar = document.getElementById('botao_limpar')
const tabela_resultado = document.getElementById('tabela_resultado')
const selectTamanho = document.getElementById('tamanho')

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
    const TONELADAS = Number(document.getElementById('toneladas').value)
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
                    <th class="td-label">Quantidade (kg)</th>
                    <th>Custo (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  class="td-label">Leite</td>
                    <td>${(qtdeIngredientes.leite / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.leite)}</td>
                </tr>
                <tr>
                    <td class="td-label">Creme</td>
                    <td>${(qtdeIngredientes.creme / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.creme)}</td>
                </tr>
                <tr>
                    <td class="td-label">Açúcar</td>
                    <td>${(qtdeIngredientes.acucar / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.acucar)}</td>
                </tr>
                <tr>
                    <td class="td-label">Leite em pó</td>
                    <td>${(qtdeIngredientes.leiteEmPo / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.leiteEmPo)}</td>
                </tr>
                <tr>
                    <td class="td-label">Nutella</td>
                    <td>${(qtdeIngredientes.nutella / 1000).toFixed(2)}</td>
                    <td>${custo.formatar(precosIngredientes.nutella)}</td>
                </tr>
            </tbody>
        </table>
    `

    tabela_resultado.innerHTML = relatorioNaTela
})

botaoLimpar.addEventListener('click', () => {
    document.getElementById('tamanho').value = "35"
    document.getElementById('raio').value = 35
    document.getElementById('altura').value = 0.5

    tabela_resultado.innerHTML = "<p>Insira os dados e clique em calcular.</p>"
})