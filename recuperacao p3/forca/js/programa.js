const word = "javascript";
const wordArray = word.split("");
const hiddenWord = Array(word.length).fill("_");
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase();
  
  if (guess.length === 1) {
    let found = false;
    
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === guess) {
        hiddenWord[i] = guess;
        found = true;
      }
    }
    
    if (!found) {
      attempts++;
    }
    
    guessInput.value = "";
    updateGameStatus();
  }
}

function updateGameStatus() {
  const wordElement = document.getElementById("word");
  wordElement.textContent = hiddenWord.join(" ");
  
  if (hiddenWord.includes("_")) {
    const resultElement = document.getElementById("result");
    
    if (attempts < 6) {
      resultElement.textContent = `Tentativas restantes: ${6 - attempts}`;
    } else {
      resultElement.textContent = "Você perdeu! Tente novamente.";
    }
  } else {
    document.getElementById("result").textContent = "Parabéns! Você venceu!";
  }
}

document.getElementById("word").textContent = hiddenWord.join(" ");
