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

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn'; // Assign the class via className

        // Assign an onclick event to the remove button to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove the <li> from the task list
        };

        // Append the remove button to the <li> element
        li.appendChild(removeBtn);

        // Append the <li> element to the task list
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks using the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on Enter key press
        }
    });
});
