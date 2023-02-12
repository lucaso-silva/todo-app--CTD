import addNewTodo from "./addNewTodo.js";

const newTask = document.querySelector('[name="new-task"]');
const addNewTask = document.querySelector('[name="checkbox-new-todo"]');
const todoList = document.querySelector("#todo-list");
//console.log(todoList);

addNewTask.addEventListener("change", () => {
  if (addNewTask.checked) {
    if (newTask.value.length >= 3) {
      addNewTodo();
      setTimeout(()=>{
        addNewTask.checked = false;
        newTask.value = "";
      }, 500)
    }
    console.log(todoList)
  }
});

