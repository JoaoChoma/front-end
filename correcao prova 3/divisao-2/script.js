function countDivisions() {
    const number = parseInt(document.getElementById("inputNumber").value);
    let count = 0;
    let result = number;
  
    while (result >= 1) {
      result = result / 2;
      count++;
    }
  
    document.getElementById("result").textContent = `O número ${number} pode ser dividido por 2 ${count} vezes.`;
  }
  