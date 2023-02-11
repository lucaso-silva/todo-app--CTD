const checksTask = document.querySelectorAll('[name="check-task"]');

console.log(checksTask);

checksTask.forEach((check) => {
    check.addEventListener("change", () => {
        if(check.checked) { 
            const taskChecked = check.parentElement
            taskChecked.classList.add("checked");
            console.log(taskChecked);

        check.addEventListener("change", ()=> {
        if(!check.checked) { 
            const taskChecked = check.parentElement
            taskChecked.classList.remove("checked");
        }});
        }; 
    })
});