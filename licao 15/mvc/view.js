// view.js
function criarVisualizacao() {
    function atualizarLista(tarefas) {
      const listaTarefas = document.getElementById('listaTarefas');
      listaTarefas.innerHTML = '';
  
      for (let i = 0; i < tarefas.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${i + 1}. ${tarefas[i]}`;
        listaTarefas.appendChild(itemLista);
      }
    }
  
    return {
      atualizarLista,
    };
  }
  
  export default criarVisualizacao;
  