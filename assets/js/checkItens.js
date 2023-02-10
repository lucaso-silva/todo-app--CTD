const checksTask = document.querySelectorAll('[name="check-task"]');
// const task = document.querySelectorAll('[name="task"]');

console.log(checksTask);

checksTask.forEach((check) => {
    check.addEventListener("change", () => {
        if(check.checked) {
            console.log(check);
        }
    })
    
})
