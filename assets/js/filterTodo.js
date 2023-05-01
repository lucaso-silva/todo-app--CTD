export default function filterTodo() {
   const buttonActived = document.getElementById(this.id);
   const allTasksList = document.querySelectorAll(".todo-note");
   const category = buttonActived.id;
   const allCompletedTasks = document.querySelectorAll(".checked");
   const activeTasks = isActiveTasks();   
   
   if(category === "completed") {
      allCompletedTasks.forEach(completedTask => {
         completedTask.classList.remove("hide");
      })
   }

   if(category === "all") {
      console.log("button all selected");
      allCompletedTasks.forEach(completedTask => {
         completedTask.classList.remove("hide");
      })
   }

   if(category === "active") {
      console.log(allCompletedTasks);
      allCompletedTasks.forEach(completedTask => {
         completedTask.classList.add("hide");
      })

      isActiveTasks();
   }
};

function isActiveTasks(allTasksList) {
   console.log(allTasksList);
}

