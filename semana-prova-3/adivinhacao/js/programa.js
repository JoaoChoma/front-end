// Gera um número aleatório entre 1 e 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  // Obtém o valor inserido pelo jogador
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  // Verifica se o palpite é menor, maior ou igual ao número secreto
  let message;
  if (guess < secretNumber) {
    message = "Palpite muito baixo. Tente novamente!";
  } else if (guess > secretNumber) {
    message = "Palpite muito alto. Tente novamente!";
  } else {
    message = "Parabéns! Você acertou!";
  }

  // Exibe a mensagem de resultado
  const result = document.getElementById("result");
  result.textContent = message;

  // Limpa o campo de entrada
  guessInput.value = "";
}
