
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask, toggleTask } from "./redux/action";
import "./Todo.css";

function Todo() {
  const [taskInput, setTaskInput] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const tasks = useSelector((state) => state);
  //console.log(tasks)
  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();
    if (taskInput.trim()) {
      if (editingTaskId !== null) {
        //console.log(editingTaskId)
        dispatch(updateTask(editingTaskId, taskInput));
        setEditingTaskId(null);
      } else {
        dispatch(addTask(taskInput));
      }
      setTaskInput("");
    }
  }

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

   function handleToggle(id) {
    dispatch(toggleTask(id));
  }

   function handleEdit(task) {
    setTaskInput(task.title); 
    setEditingTaskId(task.id);
  }

  return (
    <div className="todo-container">
      <form className="task-form"  onSubmit={handleAdd}>
        <input type="text"     value={taskInput}    onChange={(e) => setTaskInput(e.target.value)} />
        <button type="submit">{ editingTaskId !== null ?  "Update Task" :  "Add Task" }</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}   className={task.isCompleted   ?   "completed task-item"   :   "task-item"}>
            <input   type="checkbox"  checked={task.isCompleted}   onChange={ () => handleToggle(task.id)}
            />
            {task.title} 
            <div className="task-buttons">
              <button onClick={ () => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
