import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {ITodo} from "./todo.model"


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  
  const addTodoHandler = (name: string) => {
    console.log({name});
    setTodos(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), name: name}
    ])
    
  } 
  
  return (
    <div className="App"> 
        <h2>Hello world</h2>
        <TodoList items={todos}/>
        <NewTodo addTodo={addTodoHandler} />
    </div>
  );
}

export default App;
