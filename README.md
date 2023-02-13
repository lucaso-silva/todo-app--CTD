# TODO-app--CTD
![todoapp](https://user-images.githubusercontent.com/97140968/218546356-2c869696-96c4-4bdc-98e7-2e51d1a3f8d1.png)
<p align = "center"> See in the <a href="https://lucaso-silva.github.io/todo-app--CTD/">link</a></p>

## 📑 Overview
- Todo app was developed based in a model by [frontendmentor.io](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).
- This is the second project developed during the mentorship tutored by Pedro Marins and Henrique de Andrade. This first version was the result of **7 days of coding**.
  - 📌It's part of **13 days of coding in a row**, where my first project, which lasted 6 days was a [login-form validation page](https://sing-up-form-ctd.vercel.app/)
  
> Status: Developing ⚠️
---
### 🎯 The challenge
Users should be able to:
- View the optimal layout for the app depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Add new todos to the list ✅
- Mark todos as complete ✅
- Delete todos from the list 
- Filter by all/active/complete todos
- Clear all completed todos ✅
- Toggle light and dark mode

## 🛠️ Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox

## 💡 What I learned
Throughout this project, I had the opportunity to practice and improve my knowledge of JavaScript programming.

I learned to create and append HTML elements to the DOM using JavaScript methods: `document.createElement()` and `appendChild()`, it was also possible to learn about adding, and setting the element’s attributes.
```JavaScript
const inputCheckTodo = document.createElement("input");
  inputCheckTodo.type = "checkbox";
  inputCheckTodo.id = "task-" + i;
  inputCheckTodo.name = "check-todo";
  inputCheckTodo.classList.add("check-task");
  i++;

const todoLabel = document.createElement("label");
  todoLabel.setAttribute("for", inputCheckTodo.id);
  todoLabel.classList.add("todo-note-label");
  todoLabel.innerHTML = newTask.value;

  todoLi.appendChild(inputCheckTodo);
  todoLi.appendChild(todoLabel);
```

### 🧱 Continued development
My next step will be focused on filtering the TODO list between completed and active tasks, deleting the TODO line before tasks are completed, and implementing the toggle dark/light mode.

---
### 🏅 Acknowledgments
- [Pedro Marins](https://github.com/pedromarins) and Henrique de Andrade. 
- Tutors, [Rosana Mascena](https://github.com/RosanaMascena), and colleagues from the mentorship "Coquiste sua vaga" - class 23.


