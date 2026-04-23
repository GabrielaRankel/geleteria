✤Git Gelato
Projeto web desenvolvido para simular uma gelateria fictícia, com foco em cálculo de produção, custo e organização de código utilizando HTML, CSS e JavaScript modular.

✤Sobre o projeto
O Git Gelato é uma aplicação que permite simular a produção de sorvete em larga escala (em toneladas), calculando:
•Quantidade de ingredientes necessários
•Quantidade de potes produzidos
•Custo total da produção
•Custo por pote
•Dimensões físicas do sorvete (como o raio)
Além disso, o site apresenta uma interface visual com página inicial, navegação e página de contato com a equipe.

✤Ferramentas do projeto
•Trello: https://trello.com/b/3HSG5ogS/sorvete
•Figma: https://www.figma.com/design/SSGnc6K5Ei4XOCTDpuDWH6/Git-Gelato?node-id=3-7&p=f&t=JyHoUAaDanmt08H4-0

✤Conceitos aplicados
•Programação orientada a objetos (POO)
•Modularização com JavaScript (ES Modules)
•Cálculos matemáticos aplicados (volume, densidade, proporção)
•Testes unitários
•CSS para desing
•Organização de projeto web

✤Funcionalidades
●Página Inicial (index.html)
•Apresentação do projeto
•Exibição de sabores
•Navegação entre páginas
•Destaque visual com banner promocional

●Página de Contato (contato.html)
•Informações da equipe
•Divisão de funções no projeto
•Estrutura visual com layout centralizado

●Calculadora de Produção (ninho_nutella.html)
●Seleção de:
•Tamanho do pote (400g, 900g, 1700g)
•Quantidade em toneladas
●Botões de:
•Calcular
•Limpar
●Geração dinâmica de relatório com:
•Ingredientes por pote e por tonelada
•Custos detalhados
•Resumo final

✤Modelos (Lógica do sistema)
●Receita
Responsável por calcular a quantidade de ingredientes com base na produção.
•Escala proporcional dos ingredientes
•Conversão de toneladas para gramas
•Cálculo da quantidade de potes

●Custo
Responsável por calcular os custos da produção.
•Custo por ingrediente
•Custo total
•Custo por unidade (pote)
•Formatação de valores

●Sorvete
Responsável pela parte física do sorvete.
•Define altura com base no tamanho
•Calcula volume a partir da densidade
•Calcula o raio do pote (geometria do cilindro)

✤Testes
O projeto conta com testes unitários para garantir o funcionamento correto das classes:
•custo.test.js → valida cálculo de custo total
•receita.test.js → valida cálculo de ingredientes
•sorvete.test.js → valida cálculo de volume

✤Equipe
•Scrum Master: Gabriela Rankel
•Dev 1: Paula Coutinho
•Dev 2: Pietro Francio
•Dev 3: Clarice Heitmann

✤Objetivo do projeto
Demonstrar na prática conhecimentos em desenvolvimento web, integrando lógica de programação, organização de código e interface visual.
"Sua felicidade é nosso sabor favorito :)"
