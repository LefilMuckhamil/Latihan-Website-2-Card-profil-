const todoForm = document.querySelector(".todo-form");
const todoInput = document.getElementById("todo-input");
const dueDateInput = document.getElementById("due-date-input");
const todoList = document.getElementById("todo-list");
const deleteAllBtn = document.getElementById("delete-all-btn");

function addTodo(taskText, dueDate) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const dateSpan = document.createElement("span");
  dateSpan.textContent = dueDate;

  const statusSpan = document.createElement("span");
  const statusCheck = document.createElement("input");
  statusCheck.type = "checkbox";
  statusCheck.classList.add("status-check");
  statusSpan.appendChild(statusCheck);
  statusSpan.appendChild(document.createTextNode(" Belum"));

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("item-actions");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑️";
  actionsDiv.appendChild(deleteBtn);

  todoItem.appendChild(taskSpan);
  todoItem.appendChild(dateSpan);
  todoItem.appendChild(statusSpan);
  todoItem.appendChild(actionsDiv);

  todoList.appendChild(todoItem);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTodoText = todoInput.value;
  const newDueDate = dueDateInput.value;
  if (newTodoText.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }
  addTodo(newTodoText, newDueDate);
  todoInput.value = "";
  dueDateInput.value = "";
});

todoList.addEventListener("click", function (event) {
  const item = event.target;
  const todoItem = item.closest(".todo-item");

  if (!todoItem) return;

  if (item.classList.contains("delete-btn")) {
    todoItem.remove();
  }

  if (item.classList.contains("status-check")) {
    todoItem.classList.toggle("completed");
    const statusSpan = todoItem.querySelector("span:nth-child(3)");
    if (item.checked) {
      statusSpan.lastChild.textContent = " Selesai";
    } else {
      statusSpan.lastChild.textContent = " Belum";
    }
  }
});

deleteAllBtn.addEventListener("click", function () {
  todoList.innerHTML = "";
});
