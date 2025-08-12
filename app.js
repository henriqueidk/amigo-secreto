let amigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value.trim();

if (nomeDoAmigo === '') {
        alert('Por favor, insira um nome!');
        return;
    }
    amigos.push(nomeDoAmigo);
    document.getElementById('amigo').value = "";
}