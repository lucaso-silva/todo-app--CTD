import addNewTodo from "./addNewTodo.js";
import clearCompletedTasks from "./clearCompleted.js";
import filterTodo from "./filterTodo.js";
import numTodos from "./counter.js";

const newTask = document.querySelector('[name="new-task"]');
const addNewTask = document.querySelector('[name="checkbox-new-todo"]');
const todoList = document.querySelector("#todo-list");
const btnClear = document.querySelector("#btn-clear");
const btnsFilter = document.querySelectorAll('[name="btn-filter"]');

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

  numTodos();
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

  numTodos();
});


btnClear.addEventListener("click", clearCompletedTasks);

btnsFilter.forEach(btn => btn.addEventListener("click", filterTodo));

