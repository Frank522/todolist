export default function Project(){
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

    const length = () => {
        return todoArray.length;
    }

    const setName = (newName) => {
        name = newName;
    }

    const getName = () => {
        return name;
    }

    return {addTodo, removeTodo, getIndex, length, setName, getName};
}