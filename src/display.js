import Todo from "./todo.js";
import Project from "./project.js";
import Collection from "./collection.js";


const Display = (() => {
    const view = document.querySelector('#todoList');
    const dateNav = document.querySelector('#byDate');
    const projectNav = document.querySelector('#projects');
    
    let displayedTodos = [];
    displayedTodos[0] = Todo(0);
    displayedTodos[1] = Todo(1);
    let currentProject = Project(0);
 
    Array.from(dateNav.childNodes).forEach(child => {
        child.addEventListener('click', e => {
            // get todos from clicked time period utilzing innerHTML
            displayedTodos = Collection.getTodosForTimePeriod(child.innerText);
        });
    });

    Array.from(projectNav.childNodes).forEach(child => {
        child.addEventListener('click', e => {
            //get project from clicked project utilizing 
        });
    });

    const renderTodos = () => {
        displayedTodos.forEach(todo => {
            view.appendChild(todo.generateDisplayItem());
        });
    }
    return {renderTodos};
})();

export default Display;