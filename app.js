let amigos = [];
function validarNome(nome) {
    return nome.length >= 3 && /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome);
}
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    if (!validarNome(nome)) {
        alert('Por favor, insira um nome válido (mínimo 3 letras, apenas letras e espaços).');
        return;
    }

    amigos.push(nome);
    inputAmigo.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}