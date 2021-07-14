import "date-fns";
import { addDays, isAfter, isBefore, isWithinInterval } from "date-fns";
import Todo from "./todo.js";
import Project from "./project.js";

const Collection =  (() => {
  let projects = [];
  let todos = [];

  let today = new Date();
  let tomorrow = addDays(today, 1);
  let tomorrowEnd = addDays(today, 2);
  let nextWeek = addDays(today, 7);
  let nextMonth = addDays(today, 30);
  let nextYear = addDays(today, 365);

  //removes todo from both todoList, and entire system
  const removeTodo = (todo) => {
    const index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
    //removing
    projects.forEach((project) => {
      project.removeTodo(todo);
    });
  };

  //adds todo, then sorts according to dates with earlier dated todos coming first.
  const addTodo = (todo) => {
    todos[todos.length] = todo;
    todos.sort((todo1, todo2) => {
      //isBefore returns true is arg1 is before arg2, datewise
      if (isBefore(todo1.getDueDate(), todo2.getDueDate())) {
        return -1;
      } else {
        return 1;
      }
    });
  };

  const addProject = (project) => {
      projects[project.length] = project;
  }

  const removeProject = (project) => {
    const index = projects.indexOf(projects);
    if (index > -1) {
      projects.splice(index, 1);
    }
  }

  const addTodoToProject = (todo, project) => {
    project.addTodo(todo);
  };

  const removeTodoFromProject = (todo, project) => {
      project.removeTodo;
  }

  const getTodosFromProject = (project) => {
    return project.todoArray;
  };

  const updateTime = () => {
    today = new Date();
    tomorrow = addDays(today, 1);
    tomorrowEnd = addDays(today, 2);
    nextWeek = addDays(today, 7);
    nextMonth = addDays(today, 30);
    nextYear = addDays(today, 365);
  };

  const getTodosForTimePeriod = (timeperiod) => {
    updateTime();
    let interval;
    switch (timeperiod) {
      case "Today":
        interval = { start: today, end: tomorrow };
        return todos.filter((todo) => {
          isWithinInterval(todo.getDueDate, interval);
        });
      case "Tomorrow":
        interval = { start: tomorrow, end: tomorrowEnd };
        return todos.filter((todo) => {
          isWithinInterval(todo.getDueDate, interval);
        });
      case "This Week":
        interval = { start: today, end: nextWeek };
        return todos.filter((todo) => {
          isWithinInterval(todo.getDueDate, interval);
        });
      case "This Month":
        interval = { start: today, end: nextMonth };
        return todos.filter((todo) => {
          isWithinInterval(todo.getDueDate, interval);
        });
      case "This Year":
        interval = { start: today, end: nextYear};
        return todos.filter((todo) => {
          isWithinInterval(todo.getDueDate, interval);
        });
      case "Further":
        return todos.filter((todo) => {
          isAfter(todo.getDueDate, nextYear);
        });
      case "Past":
        return todos.filter((todo) => {
            isBefore(todo.getDueDate, nextYear);
          });
    }
  };

  return {addTodo, removeTodo, getTodosForTimePeriod, getTodosFromProject, addTodoToProject, removeTodoFromProject, removeProject, addProject}
})();

export default Collection;