export default function Project(n){
    const count = n;
    let todoArray = [];
    let name;
    
    const addTodo = (todo) => {
        todoArray[todoArray.length] = todo;
    }

    const removeTodo = (todo) => {
        todoArray = todoArray.filter(item => item != todo);
    }

    const getIndex = (index) => {
        if(index < todoArray.length){
            return todoArray[index];
        }
        return 'ERROR';
    }

    const setName = (newName) => name = newName;
    const getName = () => name;

    const generateDisplayItemHeader = () => {
        const projectHeader = document.createElement('h4');
        projectHeader.id = 'selectedProject'
        projectHeader.innerText = name;
        return projectHeader;
    }

    const generateDisplayItemNav = () => {
        const projectNav = document.createElement('li');
        projectNav.id = 'project' + count;
        projectNav.innerText = name;
        return projectNav
    }

    return {addTodo, removeTodo, getIndex, todoArray, setName, getName, generateDisplayItemHeader, generateDisplayItemNav};
}