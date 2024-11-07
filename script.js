function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Show the heading only when a task is added
    const taskHeading = document.getElementById("taskHeading");
    taskHeading.style.visibility = "visible";  // Just make it visible

    // Create a new list item (li) for the task
    const newTask = document.createElement("li");
    newTask.innerHTML = `${taskValue} <button onclick="removeTask(this)">Task completed</button>`;

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
}



function removeTask(taskButton) {
    const taskItem = taskButton.parentElement;
    taskItem.remove();

    // Check if no tasks are left, hide the "Tasks" heading
    const taskList = document.getElementById("taskList");
    if (taskList.children.length === 0) {
        const taskHeading = document.getElementById("taskHeading");
        taskHeading.style.visibility = "hidden";  // Hides the heading, but keeps its space
    }
}