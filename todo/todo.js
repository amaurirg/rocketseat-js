var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    console.log(todos);

    // limpa a lista antes de mostrar para não repetir os dados na tela
    listElement.innerHTML = '';

    // percorre o array
    for (todo of todos) {
        // cria um li
        var todoElement = document.createElement('li');
        // atribui o texto todo a variável
        var todoText = document.createTextNode(todo);

        // cria um a
        var linkElement = document.createElement('a');

        // obrigatório ter href para ser clicável
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        // cria o texto do elemento a
        var linkText = document.createTextNode('Excluir');
        // atribui o texto ao elemento a
        linkElement.appendChild(linkText);

        // atribui o texto ao elemento li
        todoElement.appendChild(todoText);
        // atribui o link (elemento a) em li
        todoElement.appendChild(linkElement);
        // atribui o li a ul
        listElement.appendChild(todoElement);
    }
}

buttonElement.onclick = function addTodo() {
    todos.push(inputElement.value);    
    inputElement.value = '';
    renderTodos();
}

function deleteTodo(pos) {
    // splice(pos, 1) deleta 1 item da pos (posição)
    todos.splice(pos, 1);
    renderTodos();
}

renderTodos();
