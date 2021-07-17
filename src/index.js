import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHTML, test } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( createTodoHTML );

console.log( 'todos', todoList.todos );