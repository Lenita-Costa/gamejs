function exibirTextoNaTela(tag) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1");
exibirTextoNaTela("p");
