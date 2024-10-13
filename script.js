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

        // Create Task List Item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Set class name directly

        // Add Click Event to Remove Button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem); // Remove task on click
        });

        // Append Remove Button to List Item and List Item to Task List
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear Input Field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Add task on button click

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if Enter key was pressed
            addTask(); // Call addTask function
        }
    });
});

