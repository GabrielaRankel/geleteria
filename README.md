✤ Git Gelato<br>
Projeto web desenvolvido para simular uma gelateria fictícia, com foco em cálculo de produção, custo e organização de código utilizando HTML, CSS e JavaScript modular.<br><br>

✤ Sobre o projeto<br>
O Git Gelato é uma aplicação que permite simular a produção de sorvete em larga escala (em toneladas), calculando:<br>
• Quantidade de ingredientes necessários<br>
• Quantidade de potes produzidos<br>
• Custo total da produção<br>
• Custo por pote<br>
• Dimensões físicas do sorvete (como o raio)<br><br>

Além disso, o site apresenta uma interface visual com página inicial, navegação e página de contato com a equipe.<br><br>

✤ Ferramentas do projeto<br>
• Trello: https://trello.com/b/3HSG5ogS/sorvete
<br>
• Figma: https://www.figma.com/design/SSGnc6K5Ei4XOCTDpuDWH6/Git-Gelato?node-id=3-7&p=f&t=JyHoUAaDanmt08H4-0
<br><br>

✤ Conceitos aplicados<br>
• Programação orientada a objetos (POO)<br>
• Modularização com JavaScript (ES Modules)<br>
• Cálculos matemáticos aplicados (volume, densidade, proporção)<br>
• Testes unitários<br>
• CSS para design<br>
• Organização de projeto web<br><br>

✤ Funcionalidades<br>

● Página Inicial (index.html)<br>
• Apresentação do projeto<br>
• Exibição de sabores<br>
• Navegação entre páginas<br>
• Destaque visual com banner promocional<br><br>

● Página de Contato (contato.html)<br>
• Informações da equipe<br>
• Divisão de funções no projeto<br>
• Estrutura visual com layout centralizado<br><br>

● Calculadora de Produção (ninho_nutella.html)<br>
• Seleção de:<br>
  – Tamanho do pote (400g, 900g, 1700g)<br>
  – Quantidade em toneladas<br>
• Botões de:<br>
  – Calcular<br>
  – Limpar<br>
• Geração dinâmica de relatório com:<br>
  – Ingredientes por pote e por tonelada<br>
  – Custos detalhados<br>
  – Resumo final<br><br>

✤ Modelos (Lógica do sistema)<br>

● Receita<br>
Responsável por calcular a quantidade de ingredientes com base na produção.<br>
• Escala proporcional dos ingredientes<br>
• Conversão de toneladas para gramas<br>
• Cálculo da quantidade de potes<br><br>

● Custo<br>
Responsável por calcular os custos da produção.<br>
• Custo por ingrediente<br>
• Custo total<br>
• Custo por unidade (pote)<br>
• Formatação de valores<br><br>

● Sorvete<br>
Responsável pela parte física do sorvete.<br>
• Define altura com base no tamanho<br>
• Calcula volume a partir da densidade<br>
• Calcula o raio do pote (geometria do cilindro)<br><br>

✤ Testes<br>
O projeto conta com testes unitários para garantir o funcionamento correto das classes:<br>
• custo.test.js → valida cálculo de custo total<br>
• receita.test.js → valida cálculo de ingredientes<br>
• sorvete.test.js → valida cálculo de volume<br><br>

✤ Equipe<br>
• Scrum Master: Gabriela Rankel<br>
• Dev 1: Paula Coutinho<br>
• Dev 2: Pietro Francio<br>
• Dev 3: Clarice Heitmann<br><br>

✤ Objetivo do projeto<br>
Demonstrar na prática conhecimentos em desenvolvimento web, integrando lógica de programação, organização de código e interface visual.<br>