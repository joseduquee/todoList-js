import { Todo } from "./todo.class";


export class TodoList {


    constructor() {
           
        this.loadLocalStorage();

    }

    newTodo( todo ) {
        this.todos.push( todo );
        this.saveInLocalStorage();

    }

    deleteTodo( id ) {
       
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveInLocalStorage();
    }

    toggleTodo( id ) {
        for (const todo of this.todos) {
            
            if(todo.id == id) {
                todo.isCompleted = !todo.isCompleted;
                this.saveInLocalStorage();                
                break;
            }
        }
    }

    deleteCompletedTask() {
        
        this.todos = this.todos.filter( todo => !todo.isCompleted)
        this.saveInLocalStorage();

    }

    saveInLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    loadLocalStorage() {

        this.todos = ( localStorage.getItem ('todo' ) ) 
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : [];
        
        this.todos = this.todos.map( obj => Todo.fromJson(obj) );
        // this.todos = this.todos.map( Todo.fromJson );
        //estos dos son lo mismo pero cuando se envia un solo valor o parametro se puede emitir
        //la primera forma

    }


}