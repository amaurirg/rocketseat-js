// Axios facilita as requisições usando por baixo dos panos a função XMLHttpRequest()

// Função para retorno da Promisse
// then é para casos de sucesso e catch para erros
axios.get('https://api.github.com/users/amaurirg')
.then(function(response) {
    console.log(response);
    // retorna a url do avatar que está dentro de data no retorno de response
    console.log(response.data.avatar_url);
})
.catch(function(error) {
    // warn para o console avisar o erro com o símbolo de exclamação
    console.warn(error);
});