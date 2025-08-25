let form1 = document.querySelector("form");
let addtask = document.querySelector(".display-task");
let inp = document.querySelector("input");


let todos = [];

// Select root container
const app = document.getElementById('app');

// Main container
const container = document.createElement('div');
container.className = 'container';
app.appendChild(container);

// Heading
const heading = document.createElement('h1');
heading.textContent = 'Task Tracker';
container.appendChild(heading);

// Add-task form wrapper
const addTaskDiv = document.createElement('div');
addTaskDiv.className = 'add-task';
container.appendChild(addTaskDiv);

// Form
const form = document.createElement('form');
addTaskDiv.appendChild(form);

// Input
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'add-task';
form.appendChild(input);

// Add button
const addButton = document.createElement('button');
addButton.className = 'btn-add';
addButton.innerHTML = '<img src="./corner-down-left-line.svg" alt="">';
form.appendChild(addButton);

// Task display wrapper
const deocr = document.createElement('div');
deocr.className = 'deocr';
container.appendChild(deocr);

function rendertodos() {

    deocr.innerHTML = "";

    todos.forEach(function (user) {

        const displayTask = document.createElement('div');
        displayTask.className = 'display-task';

        // Checkbox button
        const checkBox = document.createElement('button');
        checkBox.className = 'check-box active-check';
        displayTask.appendChild(checkBox);

        // Task text
        const taskText = document.createElement('p');
        taskText.textContent = user.description;
        displayTask.appendChild(taskText);

        if (user.complete) {
            taskText.style.textDecoration = "line-through";
            const checkimg = document.createElement("img");
            checkimg.src = "tick-svgrepo-com.svg";
            checkimg.alt = "tick";
            checkimg.style.width = "13px";
            checkimg.style.height = "13px";
            checkBox.appendChild(checkimg);

        }

        displayTask.appendChild(taskText)

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delet-btn';
        deleteBtn.innerHTML = '<img src="./delete-bin-5-fill.svg" alt="">';
        displayTask.appendChild(deleteBtn);

        // Append task to the task display wrapper
        deocr.appendChild(displayTask);

        // Line divider
        const line = document.createElement('div');
        line.className = 'line';
        deocr.appendChild(line);

        deleteBtn.addEventListener("click", () => {
            todos = todos.filter(t => t.id !== user.id)
            rendertodos()
        })

        checkBox.addEventListener("click", () => {
            user.complete = !user.complete
            rendertodos();
        })
    })

};

rendertodos(todos)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() !== "") {
        todos.push({ id: Date.now(), description: input.value, complete: false, })
        rendertodos();
        input.value = ""
    }
})

// done by my own 

