import { Todo } from "../classes";

import { todoList } from '../index';

//HTML references
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnDeleteCompleted = document.querySelector('.clear-completed');
const ulFilter = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');


export const createTodoHTML = (todo) => {
  
    const htmlTodo = `
    <li class="${ (todo.isCompleted) ? 'completed' : '' }" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.isCompleted) ? 'checked' : '' }>
        <label>${ todo.task }</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    //html element
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

};


//Events
txtInput.addEventListener('keyup', ( event ) => {
    
    if( event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new Todo( txtInput.value );
        todoList.newTodo( newTodo );
        
        createTodoHTML( newTodo );
        txtInput.value = '';
    }

});

divTodoList.addEventListener('click', ( event ) => {

    const elementName = event.target.localName; //se hace referencia al elemento input, label, button
    const elementTodo = event.target.parentElement.parentElement;
    const todoId = elementTodo.getAttribute('data-id');

    // console.log( elementName );
    // console.log( elementTodo );

    //click en el check
    if (elementName.includes('input')){

        todoList.toggleTodo( todoId );
        elementTodo.classList.toggle('completed');

    } else if(elementName.includes('button')) {
        todoList.deleteTodo( todoId );
        divTodoList.removeChild( elementTodo );
    }

});

btnDeleteCompleted.addEventListener('click', ()  =>{

    todoList.deleteCompletedTask();

    for(let i = divTodoList.children.length-1; i>=0; i--) {

        const element = divTodoList.children[i];
        if( element.classList.contains('completed')){
            divTodoList.removeChild(element);
        }

    }


});

ulFilter.addEventListener('click', (event) => {
    console.log(event.target.text );
    
    const filter = event.target.text;
    if( !filter ) return;

    anchorFilters.forEach( element => element.classList.remove('selected'));
    
    event.target.classList.add('selected');

    for (const element of divTodoList.children ) {
    
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');



        switch( filter ) {
            
            case 'Pendientes':
                if( completed ) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completed ) {
                    element.classList.add('hidden');
                }
            break;
            
        }

    }
})


