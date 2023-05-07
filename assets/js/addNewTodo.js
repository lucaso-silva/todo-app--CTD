const newTask = document.querySelector('[name="new-task"]');
let i = 0;

export default function addNewTodo() {
  const todoList = document.querySelector("#todo-list");

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("li-todo");

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-note");

  todoDiv.appendChild(todoLi);

  const inputCheckTodo = document.createElement("input");
  inputCheckTodo.type = "checkbox";
  inputCheckTodo.id = "task-" + i;
  inputCheckTodo.name = "check-todo";
  inputCheckTodo.classList.add("check-task");
  i++;

  const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", inputCheckTodo.id);
  todoLabel.classList.add("todo-note-label");
  todoLabel.innerHTML = newTask.value;

  const todoDelBtn = document.createElement("img");
  todoDelBtn.setAttribute("src", "./assets/imgs/del.svg")
  todoDelBtn.classList.add("todo-del")

  todoLi.appendChild(inputCheckTodo);
  todoLi.appendChild(todoLabel);
  todoLi.appendChild(todoDelBtn);

  todoList.appendChild(todoDiv);
}