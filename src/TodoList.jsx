import Task from './Task.jsx';
// import {v4 as uuid } from 'uuid'

const TodoList = ( {tasks} ) => {
  return tasks.map((task) => <Task task={task}/>)
}

export default TodoList;