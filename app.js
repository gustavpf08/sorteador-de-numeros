let numerosSorteadosEmLista = [];
let numerosSorteados;

const botaoSortear = document.querySelector("#btn-sortear");

function mudandoOTexto(id, text) {
  let textoDoJogo = document.getElementById(id);
  textoDoJogo.innerHTML = text;
}

function gerandoNumeroAleatorio(min, max) {
  let numeroAleatorio = parseInt(Math.random() * (max - min + 1)) + min;
  return numeroAleatorio;
}

function quantidadeDeVezesParaSortear() {
  let quantidadeDeNumerosSorteados = Number(
    document.getElementById("quantidade").value
  );
  let numeroDePartida = Number(document.getElementById("de").value);
  let numeroDeChegada = Number(document.getElementById("ate").value);

  for (let i = 0; i != quantidadeDeNumerosSorteados; i++) {
    numerosSorteados = gerandoNumeroAleatorio(numeroDePartida, numeroDeChegada);

    while (numerosSorteadosEmLista.includes(numerosSorteados)) {
      numerosSorteados = gerandoNumeroAleatorio(
        numeroDePartida,
        numeroDeChegada
      );
    }
    numerosSorteadosEmLista.push(numerosSorteados);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key == 13 || event.key == "Enter") {
    sortear();
  }
});

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";

  window.location.reload();
}

function habilitandoBtnReiniciar() {
  document.getElementById("btn-reiniciar").style.cursor = "default";
  document.getElementById("btn-reiniciar").disabled = false;
  document.getElementById("btn-reiniciar").style.backgroundColor = "#1875E8";
}

function sortear() {
  botaoSortear.onclick = quantidadeDeVezesParaSortear();
  mudandoOTexto(
    "numeros__sorteados",
    `Números sorteados: ${numerosSorteadosEmLista}`
  );
  habilitandoBtnReiniciar();
}
