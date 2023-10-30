alert("Boas vindas ao jogo de adivinhação");
console.log("O número secreto é 12");
let numeroSecreto = 12;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 0 e 50");

  if (chute == numeroSecreto) {
    alert(
      `Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`
    );
  } else if (chute > numeroSecreto) {
    alert("Você errou, o número secreto é menor");
  } else {
    alert("Você errou, o número secreto é maior");
  }
  tentativas++;
}
console.log("Amo o du");
