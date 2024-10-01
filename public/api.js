//define a URL base da API como http://localhost/api.
const API_URL = 'http://localhost:3800/api';

//função assíncrona para fazer login do usuário
//recebe o 'email' e 'password' com parâmetros

async function login(email,password) {
    try {
    //exibe no  console os dados de login que serão enviados ao servidor
    console.log('Enviando dados para login:', {email,password});

    //envia uma requisição POST à API na rota 'auth/login'.
    //a requisição inclui um cabeçalho para indicar que o conteúdo é JSON e envia o 'email' e 'password' no corpo da 
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST', //define o método HTTP como POST.
        headers:{
            'Content-Type':'application/json' //informa que o corpo da requisição está no formato JSON.
        },
        body:JSON.stringify({email,password})//converte os dados de login para o formato JSON e envia no corpo da requisição
    });

    //aguarda e converte a resposta do servidor para JSON.
    const result = await response.json();

    //exibe no console a resposta do servidor
    console.log('Resposta do servidor para login:', result);

    //retorna o resultado da requisição
    return result;
    } catch(error) {
        //captura qualquer erro que ocorra durante a requisição e exibe no console.
        console.error('Erro ao fazer o login:', error);

        //retorna um objeto com 'success: false' indicando que o login falhou
        return{success:false};
    }
}