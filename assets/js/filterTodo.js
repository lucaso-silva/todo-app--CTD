export default function filterTodo() {
   const allTasksList = document.querySelectorAll(".todo-note");
   const buttonActived = document.getElementById(this.id);
   const category = buttonActived.id;
   console.log(allTasksList);

   
   if(category === "completed") {
      console.log("button completed selected");

      let completedTasks = allTasksList.filter((task) => task.classList.contains("checked"))
      console.log(completedTasks);
      
   }

   if(category === "all") {
      console.log("button all selected");
   }

   if(category === "active") {
      console.log("button active selected");
   }
};


