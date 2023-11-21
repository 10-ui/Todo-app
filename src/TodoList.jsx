import Task from './Task.jsx';

const TodoList = ( {tasks, toggleTodo} ) => {
  return tasks.map((task) => <Task task={task} key={task.id} toggleTodo={toggleTodo}/>)
}

export default TodoList;