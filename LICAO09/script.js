const tabuada = 2;
// Loop através do array de objetos e adicionar as linhas à tabela
for (let i = 0; i < 31; i++) {
  // Criar uma nova linha e adicionar as células com os dados
  const linha = document.createElement('tr');
  linha.innerHTML = "<td>"+tabuada+"</td>"
   "<td>"+i+"</td>"
    "<td>"+tabuada * i+"</td>";
}
