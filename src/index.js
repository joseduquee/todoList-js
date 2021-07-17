import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHTML } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( createTodoHTML );

const newT = new Todo('Aprender JS');
// todoList.newTodo( newT );

todoList.todos[0].printClass();

console.log( 'todos', todoList.todos );