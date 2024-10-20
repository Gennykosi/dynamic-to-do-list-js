// Ensure the script runs only after the HTML content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if the input is empty
            return;
        }

        // Create new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set task text

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Button text
        removeBtn.className = 'remove-btn'; // Assign class

        // Assign click event to remove the task when button is clicked
        removeBtn.onclick = () => taskList.removeChild(li);

        // Append remove button to the task <li> element
        li.appendChild(removeBtn);
        taskList.appendChild(li); // Add the task to the list

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to input field to allow adding task with "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
