// model.js
function criarModelo() {
    const tarefas = [];
  
    function adicionarTarefa(tarefa) {
      tarefas.push(tarefa);
    }
  
    function obterTarefas() {
      return tarefas.slice(); // Retorna uma cópia das tarefas para evitar modificações diretas
    }
  
    return {
      adicionarTarefa,
      obterTarefas,
    };
  }
  
  export default criarModelo;
  