alert("Bem vindo ao jogo de adivinhação");
let numeroSecreto = 14;
let chute;

while (chute != numeroSecreto) {
  chute = prompt("Digite um numero de 1 a 15");
  if (chute == numeroSecreto) {
    alert(`Parabés, você descobriu o numero secreto ${chute}`);
  } else if (chute < numeroSecreto) {
    alert(`Você errou, o numero secreto é maior que ${chute}`);
  } else {
    alert(`Você errou, o numero secreto é menor que ${chute}`);
  }
}
