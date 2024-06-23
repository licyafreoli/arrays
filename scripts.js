
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div class="actions">
                <button class="edit">Editar</button>
                <button class="delete">Excluir</button>
            </div>
        `;
        
        tasksList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();

        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });

        taskItem.querySelector('.edit').addEventListener('click', () => {
            const newTaskText = prompt('Editar tarefa:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskItem.querySelector('span').textContent = newTaskText.trim();
            }
        });
    }
});
