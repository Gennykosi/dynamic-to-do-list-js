// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task!"); // Alert if input is empty
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Set button text

        // Assign an event listener to remove the task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove the task from the list
        };

        // Set styles directly for the <li> and button elements
        Object.assign(li.style, {
            backgroundColor: '#eeeeee',
            marginTop: '8px',
            padding: '10px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        });

        Object.assign(removeBtn.style, {
            cursor: 'pointer',
            backgroundColor: '#ff6347',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            marginLeft: '10px'
        });

        // Add hover effect using JavaScript
        removeBtn.onmouseover = function () {
            removeBtn.style.backgroundColor = '#d9534f';
        };
        removeBtn.onmouseout = function () {
            removeBtn.style.backgroundColor = '#ff6347';
        };

        // Append the remove button to the task <li> element
        li.appendChild(removeBtn);

        // Add the task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add an event listener to allow adding a task by pressing "Enter"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask on Enter key press
        }
    });
});
