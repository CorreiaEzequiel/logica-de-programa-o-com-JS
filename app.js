alert("Boas vindas ao jogo de adivinhação");
let numeroSecreto = 12;

chute = prompt("Escolha um numero entre 0 e 50");

if (chute == numeroSecreto) {
  alert("Parabens você acertou");
} else {
  alert("Ops, você errou !");
}
