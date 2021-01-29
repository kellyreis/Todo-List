import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItens from './TodoListItens';

const TodoList = () =>{

  const { todos} = useContext<TodoContextType>(TodoContext); 

  return(
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Tarefa
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          todos?.map(
            todo =>(
             <TodoListItens key={todo.id} todo={todo}></TodoListItens>
            )
          )
        }
      </tbody>
    </table>
  )
}
 export default TodoList;