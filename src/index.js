import "./style.css";
import "./buttons.js";
import forms from "./form.js";
import Project from "./project.js";
import Collection from "./collection.js";
import Display from "./display.js";

//const projectForm = ProjectForm();
const todoForm = forms.TodoForm();
const projectForm = forms.ProjectForm();
const display = document.querySelector('#todoList');


projectForm.projectFormItem.addEventListener("submit", function (e) {
  e.preventDefault();
  Collection.addProject(projectForm.generateProject());
  projectForm.reset();
});

todoForm.todoFormItem.addEventListener("submit", function (e) {
  //prevents page from refreshing
  e.preventDefault();

  Collection.addTodo(todoForm.generateTodo());
  todoForm.reset();
});

setInterval(() => {
  Display.render();
}, 1000);
