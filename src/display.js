import Todo from "./todo.js";
import Project from "./project.js";
import Collection from "./collection.js";

const Display = (() => {
  const view = document.querySelector("#todoList");
  const dateNav = document.querySelector("#byDate");
  const projectNav = document.querySelector("#projects");

  let displayedTodos = [];
  displayedTodos[0] = Todo(0);
  displayedTodos[1] = Todo(1);
  let currentProject = Project(0);

  let nav = "none";
  let currentNav = "all";

  Array.from(dateNav.childNodes).forEach((child) => {
    child.addEventListener("click", (e) => {
      // get todos from clicked time period utilzing innerHTML
      displayedTodos = Collection.getTodosForTimePeriod(child.innerText);
      currentNav = child.innerText;
      nav = "date";
    });
  });

  Array.from(projectNav.childNodes).forEach((child) => {
    child.addEventListener("click", (e) => {
      currentNav = child.innerText;
      displayedTodos = Collection.getTodosFromProjectByName();
      nav = "project";
    });
  });

  const updateTodos = () => {
    switch (nav) {
      case "none":
        displayedTodos = Collection.todos;
        currentNav = "all";
        break;
      case "date":
        displayedTodos = Collection.getTodosForTimePeriod(currentNav);
        break;
      case "project":
        displayedTodos = Collection.getTodosFromProject(currentProject);
        break;
    }
  };
  const renderTodos = () => {
    displayedTodos.forEach((todo) => {
      view.appendChild(todo.generateDisplayItem());
    });
  };

  const renderCurrentProject = () => {
    switch (nav) {
        case "none":
          
          break;
        case "date":
          displayedTodos = Collection.getTodosForTimePeriod(currentTimeperiod);
          break;
        case "project":
          displayedTodos = Collection.getTodosFromProject(currentProject);
          break;
      }
  };
  return { renderTodos , updateTodos};
})();

export default Display;
