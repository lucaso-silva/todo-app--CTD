const btnClear = document.querySelector("#btn-clear");

btnClear.addEventListener("click", clearCompletedTasks);

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll(".checked");

    completedTasks.forEach(cTask => {
        const removeLine = cTask.parentElement;
        removeLine.remove();
    })
}

