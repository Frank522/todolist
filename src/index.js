import './style.css';
import './buttons.js';
import {ProjectForm, TodoForm} from './form.js';
import {Project} from './project.js';

const projectForm = ProjectForm();
function createProject() {
    projectForm.generateProject();
    return false;
}

const todoForm = TodoForm();
function createTodo(){
    todoForm.generateTodo();
    return false;
}