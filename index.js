const inputEndpoint = document.getElementById('endpoint');
const inputDeployment = document.getElementById('deployment');
const inputApiKey = document.getElementById('apiKey');

const inputTemperature = document.getElementById('temperature');
const valorTemperature = document.getElementById('valorTemperature');
const inputMaxTokens = document.getElementById('maxTokens');
const valorMaxTokens = document.getElementById('valorMaxTokens');

const btnSalvar = document.getElementById('btnSalvar');
const statusConfig = document.getElementById('statusConfig');

const formChat = document.getElementById('formChat');
const campoMensagem = document.getElementById('campoMensagem');
const listaMensagens = document.getElementById('mensagens');


// Configuracao da API

let config = {
    endpoint: "",
    deployment: "",
    apiKey: "",

    temperature: 0.7,
    maxTokens: 500,
}

inputMaxTokens.addEventListener("input", () => {
    valorMaxTokens.textContent = inputMaxTokens.value; 
});

inputTemperature.addEventListener("input", () => {
    valorTemperature.textContent = inputTemperature.value; 
});

const instrucoesCineIa = 
    'Você é o CineIA, um assistente especializado em recomendar ' +
    'filmes e séries. Seja breve simpático e objetivo. ' +
    'Sempre sugira pelo menos um título concreto.' +
    'Explique em uma frase por que a recomendação combina com o pedido.' +
    'Considere gênero, clima, estilo e referências mencionadas pelo usuário.';

let historicoUsuario =  [];

btnSalvar.addEventListener("click", () => {
    config.endpoint = inputEndpoint.value.trim();
    config.deployment = inputDeployment.value.trim();
    config.apiKey = inputApiKey.value.trim();

    config.temperature = Number(inputTemperature.value);
    config.maxTokens = Number(inputMaxTokens.value);
});


