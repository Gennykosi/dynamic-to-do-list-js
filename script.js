// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to Add New Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create List Item (Task)
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add 'highlight' class to briefly highlight the new task
  li.classList.add('highlight');
  setTimeout(() => li.classList.remove('highlight'), 1000); // Remove highlight after 1 second

  // Add Remove Button to Task
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => removeTask(li));

  // Append Button and Task to List Item
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear Input Field
  taskInput.value = '';
}

// Function to Remove Task
function removeTask(taskElement) {
  // Add 'loading' class to remove button while removing
  const removeBtn = taskElement.querySelector('.remove-btn');
  removeBtn.classList.add('loading');

  setTimeout(() => {
    taskElement.remove(); // Remove task after a delay
  }, 500);
}

// Event Listener for Add Task Button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing 'Enter' to add tasks
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Initialize App on Page Load
document.addEventListener('DOMContentLoaded', () => {
  taskInput.focus(); // Focus on input field when page loads
});
