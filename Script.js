
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', addTask);


function addTask() {
  
  const taskText = taskInput.value.trim();

  
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }


  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

 
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="task-actions">
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  
  taskList.appendChild(taskItem);

  
  taskInput.value = '';

  
  const completeBtn = taskItem.querySelector('.complete-btn');
  const deleteBtn = taskItem.querySelector('.delete-btn');

  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
}
