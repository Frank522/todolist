export default function Todo(n){
    const count = n;
    let title;
    let description;
    let dueDate;
    let priority;
    let notes;

    const getTitle = () => title;
    const setTitle = (newTitle) => {title = newTitle};

    const getDescription = () => description;
    const setDescription = (newDescription) => {description = newDescription};

    const getDueDate = () => dueDate
    const setDueDate = (newDueDate) => {dueDate = newDueDate};

    const getPriority = () => priority;
    const setPriority = (newPriority) => {priority = newPriority};

    const getNotes = () => notes;
    const setNotes = (newNotes) => {notes = newNotes};

    //generates a todoItem in the same form as the sample todo
    const generateDisplayItem = () => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');
        todoItem.id = count;

        const todoText = document.createElement('div');
        todoText.classList.add('todoText');

        const todoTitle = document.createElement('p');
        const strong1 = document.createElement('strong');
        strong1.innerText = title;
        todoTitle.appendChild(strong1);
        todoText.appendChild(todoTitle);
        

        const todoDescription = document.createElement('p');
        todoDescription.innerText = description;
        todoText.appendChild(todoDescription);

        todoItem.appendChild(todoText);

        const todoDate = document.createElement('p');
        todoDate.classList.add('todoDate');
        const strong2 = document.createElement('strong');
        strong2.innerText = 'Due: ';
        todoDate.appendChild(strong2);
        todoDate.innerHTML += dueDate;
        todoItem.appendChild(todoDate);
        
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        const strong3 = document.createElement('strong');
        strong3.innerText = 'Priority: ';
        todoPriority.appendChild(strong3);
        todoPriority.innerHTML += priority;
        todoItem.appendChild(todoPriority);


        return todoItem;
    }

    return{getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getNotes, setNotes, generateDisplayItem, count};
}