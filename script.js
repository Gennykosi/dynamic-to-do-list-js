// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === "") {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Task Creation
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign Removal Logic
        removeButton.onclick = () => taskList.removeChild(listItem);

        // Append Remove Button to List Item, and List Item to Task List
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the Input Field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Button Click Listener

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') addTask(); // Add Task on Enter Key
    });
});
