# Boas-vindas ao exercício Desafio técnico: Calendário Tryber

Chegou o momento em que você vai criar o próprio calendário da Trybe! 🚀

Nesse calendário, você vai poder adicionar feriados e compromissos, além de adicionar as tarefas que você precisa realizar!

Para isso, será necessário colocar em prática todos os seus conhecimento de HTML, CSS e JavaScript.

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />
<br />

Desafio técnico: Calendário Tryber

Você desenvolverá um calendário semelhante ao da imagem a seguir.

![Resultado esperado](images/resultado.gif)

O projeto já tem os arquivos `.html` e `.css` inicias. Fique à vontade para soltar a criatividade e alterar o arquivo `.css` como desejar!

O objetivo deste desafio é colocar em prática o que você estudou a respeito de DOM, seletores, manipulação de elementos HTML e Eventos em JavaScript. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido no arquivo `scripts.js`. Não altere o conteúdo do arquivo `index.html`.

</details>

<br />

# Requisitos
## Exercício 1 – Crie um calendário dinamicamente

<details>
  <summary>
    O array <code>decemberDaysList</code> contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <code>ul</code>.
  </summary>
</details>

## Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe `"holiday"`

Adicione ao botão `"Feriados"` um evento de `"click"` que altere a cor de fundo dos dias que possuem a classe `"holiday"`.

## Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras

Adicione ao botão `"Sexta-feira"` um evento de `"click"` e modifique o texto a ser exibido nos dias em que são sextas-feiras.

## Exercício 4 – Implemente duas funções que criem um efeito de "zoom"

Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar para `30px` e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

## Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário

> **Como o calendário deve funcionar 👀**: A ideia é definir o que será feito em cada dia do mês de dezembro, de acordo com as tarefas que já existem em seu arquivo HTML. A pessoa deve clicar na tarefa que deseja atribuir a um dia específico e, em seguida, clicar no dia do mês. Desse modo, o dia selecionado deve ter a cor da tarefa correspondente.

- Adicione um evento que, ao clicar no elemento com a tag `<div>` referente à cor de sua tarefa, atribua a esse elemento a classe `selected`. Ou seja, quando sua tarefa apresentar a classe `selected`, ela estará selecionada.
- Em seguida, ao clicar em um dia do mês no calendário, atribua ao texto desse dia a cor da legenda da tarefa selecionada. Em seguida, ao clicar no mesmo dia, o texto deverá retornar à cor inicial `rgb(119,119,119)`.
- Ao clicar novamente no elemento com a tag `<div>`, sua classe deverá voltar a ser somente `task`. Ou seja, essa tarefa deixará de ser uma tarefa selecionada.

## Exercício 6 – Adicionando compromissos a seu calendário

- Implemente uma função que será chamada ao clique do botão com o id `'btn-add'`. Essa função vai pegar o texto que se encontra no elemento com id `'task-input'` e adicioná-lo à lista com id `'task-list'`.
- Se nenhum caractere for inserido no campo com id `'task-input'`, a função deverá chamar um `alert` com uma mensagem de erro.
- Ao pressionar a tecla <kbd>Enter</kbd>, o evento também deverá ser disparado.