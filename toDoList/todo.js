// elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addToDo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodos2UI);
}

function addToDo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    showAlert("danger", "empty input!");
  } else {
    addNewTodo(newTodo);
    showAlert("success", "added new todo!");
  }

  e.preventDefault();
}

function addNewTodo(newTodo) {
  if (getTodosFromStorage().includes(newTodo)) {
    showAlert("danger", "already exist!");
  } else {
    const storageTodo = getTodosFromStorage();
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);

    addTodo2Storage(newTodo);

    todoInput.value = "";
  }
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;

  firstCardBody.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 1500);
}

function addTodo2Storage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function loadAllTodos2UI() {
  let todos = getTodosFromStorage();
  todos.forEach((element) => {
    populateTodosFromStorage(element);
  });
}

function populateTodosFromStorage(newTodo) {
  const storageTodo = getTodosFromStorage();
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between";

  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "todo deleted");
    console.log();
  }
}

function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function filterTodos(e) {
  const value = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach((element) => {
    const item = element.textContent.toLocaleLowerCase();
    if (item.includes(value)) {
      element.setAttribute("style", "display: block;");
    } else {
      element.setAttribute("style", "display: none!important;");
    }
  });
}

function clearAllTodos(e) {
  if (confirm("delete all to-do?")) {
    //todoList.innerHTML = "";
    while (todoList.firstElementChild != null) {
      todoList.removeChild(todoList.firstElementChild);
    }
    localStorage.clear();
  }
}
