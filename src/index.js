import "./style.css";
import "./buttons.js";
import forms from "./form.js";
import Project from "./project.js";
import Display from "./display.js";

//const projectForm = ProjectForm();
const todoForm = forms.TodoForm();
const projectForm = forms.ProjectForm();
const display = document.querySelector('#todoList');


projectForm.projectFormItem.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("it worked");
  console.log(projectForm.generateProject());

});


todoForm.todoFormItem.addEventListener("submit", function (e) {
  e.preventDefault();
  let newTodo = todoForm.generateTodo();
  display.appendChild(newTodo.generateDisplayItem());
});

Display.renderTodos();
