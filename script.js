document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const deadlineInput = document.getElementById('deadline-input');
    const prioritySelect = document.getElementById('priority-select');
    const labelInput = document.getElementById('label-input');

    const taskText = taskInput.value.trim();
    const category = categorySelect.value;
    const deadline = deadlineInput.value;
    const priority = prioritySelect.value;
    const label = labelInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            <div class="details">
                <strong>${taskText}</strong>
                <span>Category: ${category}</span>
                <span>Deadline: ${deadline}</span>
                <span>Priority: ${priority}</span>
                <span>Label: ${label}</span>
            </div>
            <div>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="toggleTask(this)">✔</button>
                <button onclick="deleteTask(this)">✖</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        deadlineInput.value = '';
        labelInput.value = '';
    }
}

function toggleTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const taskText = task.querySelector('.details strong').innerText;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.querySelector('.details strong').innerText = newTaskText.trim();
    }
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
