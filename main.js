//console.log executando no browser
//console.log("Hello, World!")

//objeto document representação da pagina no JS
console.log(document)

const lista = document.getElementById("task-list")
console.log(lista)

//Com o elemento em maos podemos 
//manipular seu conteudo, aparencia e comportamento

//Manipulação de conteúdo:
//lista.innerHTML: Conteudo HTML do elemento
//lista.appenChild(): Função para adicionar elemento
//lista.removeChild(): Remover um elemento

//1- lista.innerHTML = "<li>Uma tarefa bacanuda</li>"

lista.innerHTML = lista.innerHTML + `<li id="task_1">
<input type="checkbox" id="check_1">
<label for="check_1">Uma tarefa Bacanuda</label>
<i class="material-icons">delete</i>
</li>`

// Vamos remover o primeiro item da lista...
//let primeiroLi = document.getElementById("task_1")
//lista.removeChild(primeiroLi)  // pai removendo o filho
//primeiroLi.remove()  // o proprio filho se removendo

//Quando não temos id / usando o seletor
let primeiroLi = document.querySelector("#task-list li:nth-child(1)")
lista.removeChild(primeiroLi) 

let itensDaLista = document.querySelectorAll("#task-list li")

//remover botão
/*let botao = document.querySelector("#form button[type=submit]")
botao.remove()*/

//mudando aparências
let botao = document.querySelector("#form button[type=submit]")
botao.style = "background-color: rgba(0,0,0, 0.5)"
botao.classList.add('sucesso')
//botao.className

botao.parentNode.style = "background-color: #0000FF"