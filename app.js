//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo"); // Ou document.querySelector("#amigo")
  const nome = inputNome.value;

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  inputNome.value = "";

  exibirAmigos(amigos); // Atualiza a lista na tela
}

function exibirAmigos(amigos) {
  const listaAmigos = document.getElementById("listaAmigos"); // Ou document.querySelector("#listaAmigos")
  listaAmigos.innerHTML = ""; // Limpa a lista

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione amigos para realizar o sorteio.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado"); // Ou document.querySelector("#resultado")
  resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
