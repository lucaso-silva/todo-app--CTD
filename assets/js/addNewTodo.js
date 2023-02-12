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
  inputCheckTodo.classList.add("check-task");
  i++;

  const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", inputCheckTodo.id);
  todoLabel.classList.add("todo-note-label");
  todoLabel.innerHTML = newTask.value;

  todoLi.appendChild(inputCheckTodo);
  todoLi.appendChild(todoLabel);

  todoList.appendChild(todoDiv);
}