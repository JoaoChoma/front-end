function exibirDica() {
    var musicaInput = document.getElementById('musica');
    var musica = musicaInput.value;
    var letraInicial = musica.charAt(0);
    var ocorrencias = '';
  
    for (var i = 0; i < musica.length; i++) {
      if (musica.charAt(i) === letraInicial) {
        ocorrencias += letraInicial;
      } else {
        ocorrencias += '_';
      }
    }
  
    document.getElementById('letra-inicial').textContent = 'Letra inicial: ' + letraInicial;
    document.getElementById('ocorrencias').textContent = 'Ocorrências: ' + ocorrencias;
  
    // Limpa o campo de entrada de texto
    musicaInput.value = '';
  }
  