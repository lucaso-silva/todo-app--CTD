const counter = document.querySelector(".counter");

export default function numTodos() {
    const todoList = document.querySelectorAll(".todo-note");
    const completed = document.querySelectorAll(".checked");
    
    counter.innerHTML = todoList.length - completed.length;
}