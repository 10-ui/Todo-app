
const Task = ({ task }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={task.c} readOnly/>
      </label>
      {task.name}
    </div>
  )
}

export default Task