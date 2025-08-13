let amigos = []; // armazenar os nomes
let lista = document.getElementById('listaAmigos'); // lista no HTML onde os nomes vão aparecer

function adicionarAmigo() { // função para o botão "Adicionar"
    let nomeDoAmigo = document.getElementById('amigo').value.trim(); // pega o valor do input e retira os espaços vazios

    if (nomeDoAmigo === '') { // verifica se o campo está vazio
        alert('Por favor, insira um nome!'); // notifica se estiver vazio
        return; // encerra a função aqui mesmo
    }
    amigos.push(nomeDoAmigo); // adiciona o nome à lista
    document.getElementById('amigo').value = ""; // limpa o campo de input
    lista.innerHTML = ""; // limpa a lista pra evitar duplicatas
}