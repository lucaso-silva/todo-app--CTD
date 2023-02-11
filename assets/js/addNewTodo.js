// const formNewTodo = document.querySelector("form");
const checkNwTodo = document.querySelector('[name="checkbox"]');

checkNwTodo.addEventListener("change", () => {
  const newTodoTask = document.querySelector('[name="new-task"]');
  const todoList = document.querySelector("#todo-list");

  if (checkNwTodo.checked) {
    if(newTodoTask.value.length >= 3) {
      setTimeout(() => {
        todoList.insertAdjacentHTML(
          "afterbegin",
          `
            <li class="todo-note">
            <input id="task" type="checkbox" name="check-task">
            <label for="task" class="todo-note-label">${newTodoTask.value}</label>
            </li>
            `
        );
        checkNwTodo.checked = false;
        newTodoTask.value = "";
      }, 500);
    }
  }
});
