// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // Task list

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks
        storedTasks.forEach(taskText => addTask(taskText, false)); // Add tasks to DOM without saving again
    }

    // Add Task Function: Adds tasks to the DOM and updates Local Storage if needed
    function addTask(taskText, save = true) {
        const listItem = document.createElement('li'); // Create <li> element
        listItem.textContent = taskText; // Set task text

        const removeButton = document.createElement('button'); // Create Remove button
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Set class name

        // Event Listener to Remove Task and Update Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(listItem); // Remove task from DOM
            removeTaskFromStorage(taskText); // Remove task from Local Storage
        };

        listItem.appendChild(removeButton); // Append button to list item
        taskList.appendChild(listItem); // Append list item to task list

        // Save task to Local Storage if 'save' is true
        if (save) {
            saveTaskToStorage(taskText);
        }

        taskInput.value = ''; // Clear input field
    }

    // Save Task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks from storage
        storedTasks.push(taskText); // Add new task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated list
    }

    // Remove Task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get tasks
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove matching task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated list
    }

    // Attach Event Listeners
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get input value
        if (taskText) {
            addTask(taskText); // Add task if not empty
        } else {
            alert('Please enter a task.'); // Alert if input is empty
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if Enter key is pressed
            const taskText = taskInput.value.trim(); // Get input value
            if (taskText) {
                addTask(taskText); // Add task if not empty
            } else {
                alert('Please enter a task.'); // Alert if input is empty
            }
        }
    });

    loadTasks(); // Load tasks on page load
});
