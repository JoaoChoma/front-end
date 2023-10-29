// Lista de tarefas
const tasks = [];

// Referências aos elementos do HTML
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Função para atualizar a lista de tarefas exibida
function updateTaskList() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = tasks[i];
        taskList.appendChild(li);
    }
}

// Adicionar uma nova tarefa
addTaskButton.addEventListener("click", function() {
    const newTask = taskInput.value;
    if (newTask.trim() !== "") {
        tasks.push(newTask);
        taskInput.value = "";
        updateTaskList();
    }
});

// Inicializar a lista de tarefas
updateTaskList();
