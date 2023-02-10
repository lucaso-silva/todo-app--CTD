const formNewTodo = document.querySelector("form");
const checkNwTodo = document.querySelector('[name="checkbox"]')

checkNwTodo.addEventListener("change", () => {
    const newTodoTask = document.querySelector('[name="new-task"]')
    const todoList = document.querySelector("#todo-list");
    
    todoList.insertAdjacentHTML("afterbegin", `
    <li class="todo-note">
        <input id="task" type="checkbox">
        <label for="task" class="todo-note-label">${newTodoTask.value}</label>
    </li>
    `);

    if(checkNwTodo.checked) {
        setTimeout(() => {
            checkNwTodo.checked = false;
            newTodoTask.value = ""
        }, 700);
    };
});