export default function filterTodo() {
   const buttonActived = document.getElementById(this.id);
   const allTasksList = document.querySelectorAll(".todo-note");
   const category = buttonActived.id;
   const allTasksArray = Array.from(allTasksList)
   
   if(category === "completed") {
      allTasksArray.map(task => {
         if(task.classList.contains("checked")) {
            task.classList.remove("hide");
         } else {
            task.classList.add("hide");
         };
      });
   }

   if(category === "all") {
      allTasksList.forEach(task => {
         task.classList.remove("hide");
      })
   }

   if(category === "active") {
      allTasksArray.map(task => {
         if(task.classList.contains("checked")) {
            task.classList.add("hide");
         } else {
            task.classList.remove("hide");
         };
      });
   }
};

