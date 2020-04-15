var listElement = document.querySelector('#app ul');
var inputUser = document.querySelector('#user');
var btnSearch = document.querySelector('button');


function montaUl(text) {
    var liElement = document.createElement('li');
    var textLi = document.createTextNode(text);
    liElement.appendChild(textLi);
    listElement.appendChild(liElement);
}

btnSearch.onclick = function buscaRepos(user) {
    var listRepos = []
    listElement.innerHTML = '';

    montaUl('Carregando...');

    axios.get(`https://api.github.com/users/${inputUser.value}/repos`)
        .then(function (response) {
            for (repo of response.data) {
                listRepos.push(repo.name);
            }

            listElement.innerHTML = '';

            for (li of listRepos) {
                montaUl(li);
            }
            listElement.style.listStyleType = 'none';
        })
        .catch(function (error) {
            console.warn(error);
        });
    inputUser.value = '';
    inputUser.focus();
}
