const Task = ({ task, toggleTodo }) => {

  const handleTodoClick = () =>{
    toggleTodo(task.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={task.c} onChange={handleTodoClick} />
      </label>
      {task.name}
    </div>
  );
};

export default Task;
