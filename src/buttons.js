const newTodoBtn = document.querySelector("#newTodoBtn");
const newProjBtn = document.querySelector("#newProjBtn");
const newTodoForm = document.querySelector('#newTodoForm');
const newProjectForm = document.querySelector('#newProjectForm');

newTodoBtn.addEventListener('click', () => {
    if(newTodoForm.style.display == 'none'){
        newTodoForm.style.display = 'flex';
    } else {
        newTodoForm.style.display = 'none';
    }
});

newProjBtn.addEventListener('click', () => {
    if(newProjectForm.style.display == 'none'){
        newProjectForm.style.display = 'flex';
    } else {
        newProjectForm.style.display = 'none';
    }
});
