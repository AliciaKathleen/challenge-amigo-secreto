let amigos = [];
function validarNome(nome) {
    return nome.length >= 3 && /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome);
}