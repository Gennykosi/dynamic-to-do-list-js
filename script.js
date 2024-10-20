// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if input is empty
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button and assign class name 'remove-btn'
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn'; // Set the class name

        // Assign an onclick event to remove the task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove task from the list
        };

        // Append the remove button to the task <li> element
        li.appendChild(removeBtn);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add an event listener for adding a task using the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on Enter key press
        }
    });
});