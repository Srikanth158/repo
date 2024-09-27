function addTaskOnEnter(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === '') return;
    
    // Increase font size of the input field
    taskInput.classList.add('enlarged');

    const li = document.createElement('li');a
    
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div class="task-actions">
            <button class="editBtn">
                <i class="fas fa-edit"></i> Edit
            </button>
            <button class="deleteBtn">
                <i class="fas fa-trash"></i> Delete
            </button>
            <button class="markBtn">
                <i class="fas fa-check"></i> Mark as Complete
            </button>
        </div>
    `;

    document.getElementById('taskList').appendChild(li);
    
    taskInput.value = '';

    // Delete Task
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
        
        // Restore font size of the input field
        taskInput.classList.remove('enlarged');
    });

    // Edit Task
    li.querySelector('.editBtn').addEventListener('click', function() {
        const span = li.querySelector('span');
        const newTask = prompt('Edit task:', span.textContent);
        
        if (newTask) {
            span.textContent = newTask; 
        }
    });

   // Mark Task as Complete
   li.querySelector('.markBtn').addEventListener('click', function() {
       li.classList.toggle('completed');
   });
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);