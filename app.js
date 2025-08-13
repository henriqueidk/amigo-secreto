let amigos = []; // armazenar os nomes
let lista = document.getElementById('listaAmigos'); // lista no HTML onde os nomes vão aparecer

function adicionarAmigo() { // função para o botão "Adicionar"
    let nomeDoAmigo = document.getElementById('amigo').value.trim(); // pega o valor do input + retira os espaços vazios [NÃO ENSINADO]

    if (nomeDoAmigo === '') { // verifica se o campo está vazio
        alert('Por favor, insira um nome!'); // notifica se estiver vazio
        return; // encerra a função aqui mesmo
    }
    amigos.push(nomeDoAmigo); // adiciona o nome à lista
    document.getElementById('amigo').value = ""; // limpa o campo de input
    lista.innerHTML = ""; // limpa a lista pra evitar duplicatas

    for (let i = 0; i < amigos.length; i++) { // loop que percorre toda a lista de amigos [NÃO ENSINADO]
    lista.innerHTML += `<li>${amigos[i]}</li>`; // Adiciona cada nome como um <li> na lista [NÃO ENSINADO]
    }

function sortearAmigo() { // função para o botão "Sortear amigo"
    if (amigos.length === 0) { // verifica se a lista de amigos está vazia
        alert('Não há amigos para sortear :|'); // notifica se ela estiver vazia
        return; // encerra a função aqui mesmo
    }
}