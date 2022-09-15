import React from 'react';

export interface IToDoList {
  items: {id: string, name: string}[]
}

const TodoList: React.FC<IToDoList> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;