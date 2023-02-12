import addNewTodo from "./addNewTodo.js";
import clearCompletedTasks from "./clearCompleted.js";

const newTask = document.querySelector('[name="new-task"]');
const addNewTask = document.querySelector('[name="checkbox-new-todo"]');
const todoList = document.querySelector("#todo-list");
const btnClear = document.querySelector("#btn-clear");

addNewTask.addEventListener("change", () => {
  if (addNewTask.checked) {
    if (newTask.value.length >= 3) {
      addNewTodo();
      setTimeout(() => {
        addNewTask.checked = false;
        newTask.value = "";
      }, 500);
    }
  }
});

todoList.addEventListener("change", () => {
  const allTodo = document.querySelectorAll('[name="check-todo"]');

  allTodo.forEach((check) => {
    if (check.checked) {
      const checkedTask = check.parentElement;
      checkedTask.classList.add("checked");
    }

    check.addEventListener("change", () => {
      if (!check.checked) {
        const checkedTask = check.parentElement;
        checkedTask.classList.remove("checked");
      }
    });
  });
});


btnClear.addEventListener("click", clearCompletedTasks);