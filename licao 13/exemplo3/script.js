function mostrarResultado() {
    var input = document.getElementById('input-string').value;
    var length = input.length;
    var uppercase = input.toUpperCase();
    var lowercase = input.toLowerCase();
    var substring = input.substring(0, 5); // Obtém os primeiros 5 caracteres
    var replace = input.replace('a', 'X'); // Substitui a primeira ocorrência de 'a' por 'X'
  
    document.getElementById('length').textContent = 'Comprimento: ' + length;
    document.getElementById('uppercase').textContent = 'Letras maiúsculas: ' + uppercase;
    document.getElementById('lowercase').textContent = 'Letras minúsculas: ' + lowercase;
    document.getElementById('substring').textContent = 'Substring (primeiros 5 caracteres): ' + substring;
    document.getElementById('replace').textContent = 'Substituição de "a" por "X": ' + replace;
  }
  