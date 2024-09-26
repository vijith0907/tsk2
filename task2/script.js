const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="completeTask(this)">Complete</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskList.removeChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').textContent;
    const newTaskText = prompt("Edit task:", taskText);

    if (newTaskText && newTaskText.trim() !== "") {
        taskItem.querySelector('span').textContent = newTaskText;
    } else {
        alert("Task cannot be empty.");
    }
}