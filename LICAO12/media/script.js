let valores = [];

function adicionarValor() {
  const valorInput = document.getElementById("valor-input");
  const valor = parseFloat(valorInput.value);

  if (!isNaN(valor)) {
    valores.push(valor);
    valorInput.value = "";
    
    exibirValores();
    calcularMedia();
  }
}

function exibirValores() {
  const valoresLista = document.getElementById("valores-lista");
  valoresLista.innerHTML = "";

  for (let i = 0; i < valores.length; i++) {
    const item = document.createElement("li");
    item.textContent = valores[i];
    valoresLista.appendChild(item);
  }
}

function calcularMedia() {
  const mediaElement = document.getElementById("media");

  if (valores.length === 0) {
    mediaElement.textContent = "Insira valores para calcular a média.";
  } else {
    const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / valores.length;
    mediaElement.textContent = `Média: ${media.toFixed(2)}`;
  }
}
