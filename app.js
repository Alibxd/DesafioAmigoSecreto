//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }
    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
    let sorteio = [...listaAmigos];
    let resultado = {};
    let tentativas = 0;
    let sucesso = false;

    while (!sucesso && tentativas < 100) {
        sucesso = true;
        sorteio.sort(() => Math.random() - 0.5);
        resultado = {};

        for (let i = 0; i < listaAmigos.length; i++) {
            if (listaAmigos[i] === sorteio[i]) {
                sucesso = false;
                break;
            }
            resultado[listaAmigos[i]] = sorteio[i];
        }
        tentativas++;
    }

    if (sucesso) {
        exibirResultado(resultado);
    } else {
        alert("Não foi possível realizar o sorteio sem que alguém pegasse a si mesmo. Tente novamente!");
    }
}

function exibirResultado(resultado) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";
    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} -> ${sorteado}`;
        ul.appendChild(li);
    }
}
