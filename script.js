// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for tasks
    const taskList = document.getElementById('task-list');     // Unordered list for tasks

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create a new list item and set its text content to the task text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Assign class name directly

        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove the task when clicked
        };

        // Append the Remove button to the list item, then append the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the Enter key was pressed
            addTask(); // Call addTask function
        }
    });
});
