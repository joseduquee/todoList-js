import { countPendingTask } from "../js/componentes";
import { Todo } from "./todo.class";


export class TodoList {


    constructor() {
           
        this.loadLocalStorage();
        this.countPendingTask();

    }

    newTodo( todo ) {
        this.todos.push( todo );
        this.saveInLocalStorage();
        this.countPendingTask();

    }

    deleteTodo( id ) {
       
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveInLocalStorage();
        this.countPendingTask();
    }

    toggleTodo( id ) {
        this.todos.forEach(todo => {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.saveInLocalStorage();
                this.countPendingTask()
            }
        });
    }

    countPendingTask() {
        let pendientes = 0;
        let countBox = countPendingTask.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
    }

    deleteCompletedTask() {
        
        this.todos = this.todos.filter( todo => !todo.isCompleted);
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