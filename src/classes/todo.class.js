
export class Todo {

    static fromJson( {id, task, isCompleted, created} ) {

        const tempTodo       = new Todo( task );
        tempTodo.id          = id;
        tempTodo.isCompleted = isCompleted;
        tempTodo.created     = created;

        return tempTodo;
    }

    constructor( task ) {
        
        this.id          = new Date().getTime();
        this.task        = task;
        this.isCompleted = false;
        this.created     = new Date();

    }

    printClass() {
        console.log((`${ this.task } - ${ this.id }`));
    }

    


}