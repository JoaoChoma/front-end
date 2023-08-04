function startGame() {
    const targetNumber = 6; // Número a ser alcançado
    let diceRolls = 0;
    let currentNumber = 0;
  
    while (currentNumber !== targetNumber) {
      // Simulação do lançamento de um dado de 6 lados
      currentNumber = Math.floor(Math.random() * 6) + 1;
      diceRolls++;
    }
  
    document.getElementById("result").textContent = `Número alcançado após ${diceRolls} lançamentos.`;
  }
  