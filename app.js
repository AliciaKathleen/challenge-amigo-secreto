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

function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos 1 amigo para realizar o sorteio!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const li = document.createElement('li');
    li.style.color = '#2ecc71'; // Cor verde
    li.style.fontSize = '1.2rem';
    li.style.textAlign = 'center';
    li.style.marginTop = '20px';
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    const li = document.createElement('li');
    li.style.color = '#2ecc71'; // Cor verde
    li.style.fontSize = '1.2rem';
    li.style.textAlign = 'center';
    li.style.marginTop = '20px';
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    amigos = [];
    atualizarListaAmigos();
}
