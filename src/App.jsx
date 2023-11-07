import { useState, useRef } from 'react';
import TodoList from './TodoList.jsx'


function App() {

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef()

  const AddTodo = () => {
    console.log(todos);
    const name = todoNameRef.current.value
    setTodos((prevTodos) => {
      return [...prevTodos, { id:'1', name: name, c: false }]
    });
    todoNameRef.current.value = null;
  };

  return (
    <>
      <TodoList tasks = { todos } />
      <input type="text" ref={todoNameRef}/>
      <button onClick={() => AddTodo()}>Add Task</button>
      <button>Delete Task</button>
      <div>Task Limited : 0</div>
    </>
  )
}

export default App