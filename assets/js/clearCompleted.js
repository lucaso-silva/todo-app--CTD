export default function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll(".checked");

    completedTasks.forEach(cTask => {
        const removeTodoLine = cTask.parentElement;
        removeTodoLine.remove();
    })
}

