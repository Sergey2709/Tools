import { onCreateTask } from './createTask.js';
import { onListClick } from './deleteTask.js';
import { onToggleTask } from './updateTasks.js';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
  listElem.addEventListener('click', onToggleTask);
};
