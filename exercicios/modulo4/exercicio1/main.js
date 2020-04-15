function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            resolve('É maior sim');
        } else {
            reject(new Error('Erro na requisição'));
        }
    })};


checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });
