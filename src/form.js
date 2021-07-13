import Todo from './todo.js';
import Project from './project.js';
import {parseISO} from 'date-fns';

function TodoForm() {
  const titleData = document.querySelector("#newTodoForm #title");
  const descriptionData = document.querySelector("#newTodoForm #description");
  const dueDateData = document.querySelector("#newTodoForm #dueDate");
  const priorityData = document.querySelector("#newTodoForm #priority");
  const todoSubmitBtn = document.querySelector("#newTodoForm #submitBtn");

  const generateTodo = () => {
    const newTodo = Todo();
    newTodo.setTitle(titleData.value);
    newTodo.setDescription(descriptionData.value);
    newTodo.setDueDate(parseISO(dueDateData.value));
    newTodo.setPriority(priorityData.value);
    return newTodo;
  }

  return {generateTodo, todoSubmitBtn};
}

function ProjectForm() {
    const newProjectTitleData = document.querySelector("#newProjectForm #title");
    const projectSubmitBtn = document.querySelector("#newProjectForm #submitBtn");


    const generateProject = () => {
        const newProject = Project();
        newProject.setTitle(newProjectTitleData.value);
    }
    
    return {generateProject, projectSubmitBtn};

}

export {ProjectForm, TodoForm};

