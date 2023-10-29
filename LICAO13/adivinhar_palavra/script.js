var palavra = 'elefante'; // Palavra a ser adivinhada
var palavraOculta = ''; // Palavra oculta (exibida com underlines)
var tentativas = 0; // Número de tentativas
var maxTentativas = 6; // Número máximo de tentativas permitidas
var letrasTentadas = []; // Letras já tentadas

// Inicializa a palavra oculta com underlines
for (var i = 0; i < palavra.length; i++) {
  palavraOculta += '_';
}

document.getElementById('palavra-oculta').textContent = palavraOculta;

function verificarLetra() {
  var letraInput = document.getElementById('letra-input');
  var letra = letraInput.value.toLowerCase();
  letraInput.value = '';

  if (letra.length !== 1 || !/[a-z]/.test(letra)) {
    alert('Digite uma única letra válida (a-z).');
    return;
  }

  if (letrasTentadas.includes(letra)) {
    alert('Você já tentou essa letra. Tente outra.');
    return;
  }

  letrasTentadas.push(letra);

  if (palavra.includes(letra)) {
    var novaPalavraOculta = '';

    for (var i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        novaPalavraOculta += letra;
      } else {
        novaPalavraOculta += palavraOculta[i];
      }
    }

    palavraOculta = novaPalavraOculta;
    document.getElementById('palavra-oculta').textContent = palavraOculta;
  } else {
    tentativas++;
    document.getElementById('lista-tentativas').innerHTML += '<li>' + letra + '</li>';

    if (tentativas === maxTentativas) {
      document.getElementById('resultado').textContent = 'Você perdeu! A palavra era: ' + palavra;
      document.getElementById('letra-input').disabled = true;
    }
  }

  if (palavraOculta === palavra) {
    document.getElementById('resultado').textContent = 'Parabéns! Você acertou a palavra!';
    document.getElementById('letra-input').disabled = true;
  }
}
