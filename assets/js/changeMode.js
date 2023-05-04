const banner = document.querySelector(".banner");
const containerApp = document.querySelector(".container-app")
const newToDo = document.querySelector(".new-todo");
const toDoList = document.querySelector(".todo-list");
const listInfo = document.querySelector(".list-info");
const listFilter = document.querySelector(".list-filter");
const inputTodo = document.querySelector(".input-todo");
const toDoNote = document.querySelector(".todo-note");
const btnColorMode = document.querySelector(".img-toggle"); 

function addLightMode() {
    banner.classList.add("banner--light")
    containerApp.classList.add("container-app--light")
    newToDo.classList.add("new-todo--light")
    inputTodo.classList.add("input-todo--light");
    toDoList.classList.add("todo-list--light");
    listInfo.classList.add("list-info--light")
    listFilter.classList.add("list-filter--light")
    btnColorMode.setAttribute("src", "./assets/imgs/icon-moon.svg")
    toDoNote.classList.add("todo-note--light");
}

function removeLightMode() {
    banner.classList.remove("banner--light")
    containerApp.classList.remove("container-app--light")
    newToDo.classList.remove("new-todo--light")
    inputTodo.classList.remove("input-todo--light");
    toDoList.classList.remove("todo-list--light")
    listInfo.classList.remove("list-info--light")
    listFilter.classList.remove("list-filter--light")
    btnColorMode.setAttribute("src", "./assets/imgs/icon-sun.svg")
    toDoNote.classList.remove("todo-note--light");
}

export { addLightMode, removeLightMode }