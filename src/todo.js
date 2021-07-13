export default function Todo(){
    const getTitle = () => this.title;
    const setTitle = (title) => {this.title = title};

    const getDescription = () => this.description;
    const setDescription = (description) => {this.description = description};

    const getDueDate = () => this.dueDate
    const setDueDate = (dueDate) => {this.dueDate = dueDate};

    const getPriority = () => this.priority;
    const setPriority = (priority) => {this.priority = priority};

    const getNotes = () => this.notes;
    const setNotes = (notes) => {this.notes = notes};

    return{getTitle, setTitle, getDescription, setDescription, getDueDate, setDueDate, getPriority, setPriority, getNotes, setNotes};
}