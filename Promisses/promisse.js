// Promisses são códigos que não vão influenciar na linha do tempo do código JS.
// São funções que vão devolver o valor de resultado de sucesso ou erro só depois 
// de um tempo e não precisamos nos preocupar quando será retornado pois o JS continuará executando.
var minhaPromisse = function() {
    // Promise(function(resolve, reject) isso é um padrão
    // resolve retorna quando tivemos sucesso
    // reject retorna quando tivemos erro
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        // buscando dados de usuário no Github
        xhr.open('GET', 'https://api.github.com/users/amaurirg');
        xhr.send(null);

        // como a requisição não acontece no mesmo fluxo do script por ser assíncrona o JS 
        // não pode ficar esperando essa requisição finalizar para continuar o código. Para
        // isso usamos o onreadystatechange'
        xhr.onreadystatechange = function() {
            // readyState === 4 onde o 4 significa quando a resposta retornou
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    // passa o retorno convertido de JSON para a Promisse
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

// Função para retorno da Promisse
// then é para casos de sucesso e catch para erros
minhaPromisse()
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    // warn para o console avisar o erro com o símbolo de exclamação
    console.warn(error);
});
