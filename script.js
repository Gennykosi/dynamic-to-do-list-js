// Ensure script runs only after the DOM is fully loaded
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
        removeBtn.style.cursor = 'pointer'; // Apply inline styling
        removeBtn.style.backgroundColor = '#ff6347';
        removeBtn.style.color = 'white';
        removeBtn.style.border = 'none';
        removeBtn.style.borderRadius = '4px';
        removeBtn.style.padding = '5px 10px';
        removeBtn.style.marginLeft = '10px';

        // Add hover effect using JavaScript
        removeBtn.onmouseover = () => {
            removeBtn.style.backgroundColor = '#d9534f';
        };
        removeBtn.onmouseout = () => {
            removeBtn.style.backgroundColor = '#ff6347';
        };

        // Assign an event listener to remove the task when clicked
        removeBtn.onclick = () => taskList.removeChild(li);

        // Append the remove button to the task <li> element
        li.appendChild(removeBtn);

        // Add inline styling to the <li> element
        li.style.backgroundColor = '#eeeeee';
        li.style.marginTop = '8px';
        li.style.padding = '10px';
        li.style.borderRadius = '4px';
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';

        // Add the task to the list
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
