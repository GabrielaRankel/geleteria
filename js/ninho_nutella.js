import Receita from "../models/receita.js"
import Custo from "../models/custo.js"

const botaoCalcular = document.getElementById('botao_calcular')
const botaoLimpar = document.getElementById('botao_limpar')
const tabela_resultado = document.getElementById('tabela_resultado')
const selectTamanho = document.getElementById('tamanho')

botaoCalcular.addEventListener('click', () => {
    const TONELADAS = Number(document.getElementById('toneladas').value)
    const pesoPote = Number(selectTamanho.value) // agora correto

    if (pesoPote <= 0 || TONELADAS <= 0) {
        alert("Valores inválidos!")
        return
    }

    // Receita
    const receita = new Receita()
    const qtdeIngredientes = receita.calcularQtdeIngrediente(TONELADAS)

    // Quantidade de potes (baseado no peso)
    const totalGramas = TONELADAS * 1000000
    const qtdeSorvete = Math.floor(totalGramas / pesoPote)

    // Custos
    const custo = new Custo()
    const precosIngredientes = custo.calcularCusto(qtdeIngredientes)

    const custoTotal = custo.formatar(custo.totalCusto)
    const custoUnitario = custo.formatar(custo.calcularCustoPorPote(qtdeSorvete))

    const relatorioNaTela = `
<section class="tabela_resultado">

  <h3 class="h3Tabela">Relatório: ${TONELADAS} Tonelada(s)</h3>

  <table class="calc-table">
    
    <thead>
      <tr>
        <th class="th-label">QUANTIDADE</th>
        <th>POR POTE (kg)</th>
        <th>POR TONELADA (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-label">LEITE:</td>
        <td>${(qtdeIngredientes.leite / qtdeSorvete / 1000).toFixed(3)}</td>
        <td>${(qtdeIngredientes.leite / 1000).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="td-label">CREME:</td>
        <td>${(qtdeIngredientes.creme / qtdeSorvete / 1000).toFixed(3)}</td>
        <td>${(qtdeIngredientes.creme / 1000).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="td-label">AÇÚCAR:</td>
        <td>${(qtdeIngredientes.acucar / qtdeSorvete / 1000).toFixed(3)}</td>
        <td>${(qtdeIngredientes.acucar / 1000).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="td-label">LEITE EM PÓ:</td>
        <td>${(qtdeIngredientes.leiteEmPo / qtdeSorvete / 1000).toFixed(3)}</td>
        <td>${(qtdeIngredientes.leiteEmPo / 1000).toFixed(2)}</td>
      </tr>
      <tr>
        <td class="td-label">NUTELLA:</td>
        <td>${(qtdeIngredientes.nutella / qtdeSorvete / 1000).toFixed(3)}</td>
        <td>${(qtdeIngredientes.nutella / 1000).toFixed(2)}</td>
      </tr>
    </tbody>

    <thead>
      <tr>
        <th class="th-label">PREÇO</th>
        <th>POR POTE (R$)</th>
        <th>POR TONELADA (R$)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="td-label">LEITE:</td>
        <td>${custo.formatar(precosIngredientes.leite / qtdeSorvete)}</td>
        <td>${custo.formatar(precosIngredientes.leite)}</td>
      </tr>
      <tr>
        <td class="td-label">CREME:</td>
        <td>${custo.formatar(precosIngredientes.creme / qtdeSorvete)}</td>
        <td>${custo.formatar(precosIngredientes.creme)}</td>
      </tr>
      <tr>
        <td class="td-label">AÇÚCAR:</td>
        <td>${custo.formatar(precosIngredientes.acucar / qtdeSorvete)}</td>
        <td>${custo.formatar(precosIngredientes.acucar)}</td>
      </tr>
      <tr>
        <td class="td-label">LEITE EM PÓ:</td>
        <td>${custo.formatar(precosIngredientes.leiteEmPo / qtdeSorvete)}</td>
        <td>${custo.formatar(precosIngredientes.leiteEmPo)}</td>
      </tr>
      <tr>
        <td class="td-label">NUTELLA:</td>
        <td>${custo.formatar(precosIngredientes.nutella / qtdeSorvete)}</td>
        <td>${custo.formatar(precosIngredientes.nutella)}</td>
      </tr>
      <tr class="tr-total">
        <td class="td-label td-rs">R$</td>
        <td>${custoUnitario}</td>
        <td>${custoTotal}</td>
      </tr>
    </tbody>
  </table>

  <div class="resumo">
    <div class="resumo_secao">
      <div class="resumo-title">TAMANHO</div>
      <div class="resumo-value">${pesoPote}g</div>
    </div>
    <div class="resumo_secao">
      <div class="resumo-title resumo-qty">Quantidade</div>
      <div class="resumo-value">${qtdeSorvete}</div>
    </div>
    <div class="resumo_secao">
      <div class="resumo-title resumo-price">R$</div>
      <div class="resumo-value">${custoTotal}</div>
    </div>
  </div>

</section>
    `

    tabela_resultado.innerHTML = relatorioNaTela
})

botaoLimpar.addEventListener('click', () => {
    document.getElementById('tamanho').value = "400"
    document.getElementById('toneladas').value = "1"

    tabela_resultado.innerHTML = ""
})