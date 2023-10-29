// controller.js
function criarControlador(modelo, visualizacao) {
    function adicionarTarefa() {
      const novaTarefaInput = document.getElementById('novaTarefa');
      const novaTarefa = novaTarefaInput.value;
      modelo.adicionarTarefa(novaTarefa);
      novaTarefaInput.value = ''; // Limpa o campo de entrada
      const tarefas = modelo.obterTarefas();
      visualizacao.atualizarLista(tarefas);
    }
  
    return {
      adicionarTarefa,
    };
  }
  
  export default criarControlador;
  