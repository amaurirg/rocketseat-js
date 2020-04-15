var listElement = document.querySelector('#app ul');
var inputUser = document.querySelector('#user');
var btnSearch = document.querySelector('button');


btnSearch.onclick = function buscaRepos(user) {
    var listRepos = []
    listElement.innerHTML = '';

    axios.get(`https://api.github.com/users/${inputUser.value}/repos`)
        .then(function (response) {
            for (repo of response.data) {
                listRepos.push(repo.name);
            }
            for (li of listRepos) {
                var liElement = document.createElement('li');
                var textLi = document.createTextNode(li);
                liElement.appendChild(textLi);
                listElement.appendChild(liElement);
            }
            listElement.style.listStyleType = 'none';
        })
        .catch(function (error) {
            console.warn(error);
        });
    inputUser.value = '';
    inputUser.focus();
}
