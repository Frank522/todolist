import Todo from './todo.js';
import Project from './project.js';
import Collection from './collection.js';
import {formatISO, parseISO} from 'date-fns';

const TodoForm = () => {
  const titleData = document.querySelector("#newTodoForm #title");
  const descriptionData = document.querySelector("#newTodoForm #description");
  const dueDateData = document.querySelector("#newTodoForm #dueDate");
  dueDateData.value = formatISO(new Date());
  const priorityData = document.querySelector("#newTodoForm #priority");
  const todoSubmitBtn = document.querySelector("#newTodoForm #submitBtn");
  const todoFormItem = document.querySelector("#newTodoForm");

  
  let todoCount = 0;

  const generateTodo = () => {
    todoCount++;
    const newTodo = Todo(todoCount);
    newTodo.setTitle(titleData.value);
    newTodo.setDescription(descriptionData.value);
    newTodo.setDueDate(parseISO(dueDateData.value));
    newTodo.setPriority(priorityData.value);
    return newTodo;
  }

  return {generateTodo, todoSubmitBtn, todoFormItem};
}

const ProjectForm = () => {
    const newProjectTitleData = document.querySelector("#newProjectForm #title");
    const projectSubmitBtn = document.querySelector("#newProjectForm #submitBtn");
    const projectFormItem = document.querySelector("#newProjectForm");
    let projectCount = 0;

    const generateProject = () => {
        const newProject = Project();
        newProject.setTitle(newProjectTitleData.value);
        return newProject;
    }
    
    return {generateProject, projectSubmitBtn, projectFormItem};

}

export default {TodoForm, ProjectForm};

