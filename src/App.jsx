import { useState, useRef } from 'react';
import TodoList from './TodoList.jsx';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const AddTodo = () => {
    console.log(todos);
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, c: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.c = !todo.c;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.c);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList tasks={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={() => AddTodo()}>Add Task</button>
      <button onClick={() => handleClear()}>Delete Task</button>
      <div>Task Limited : {todos.filter((todo) => !todo.c).length}</div>
    </>
  );
}

export default App;
