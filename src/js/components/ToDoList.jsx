import React, { useState } from "react";


//create your first component
const ToDoList = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleTask = event => {
    setTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (task.trim() != '') {
      setTodos([...todos, { id: todos.length + 1, todo: task, color: todos.length % 2 === 0 ? 'whitesmoke' : '' }])
    }
    setTask('')
  }

  const handleDelete = (tarea) => {
    setTodos(todos.filter((item) => item.id != tarea.id))
  }

  return (
    <div className="container text-center">
      <div className="row justify-content-center mt-5">
          <h1 className="text-center mb-4">Todos List</h1>

          <div className="col-12 col-md-8 col-lg-6">
          <form onSubmit={handleSubmit}>
            <input onChange={handleTask} className="form-control" type="text" id="taskInput" value={task} placeholder="Añade una tarea"/>
          </form>

          <ul className="list-group mt-3">
            {todos.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between icon" style={{wordBreak: 'break-word', backgroundColor: item.color}}>
                <span className="text-wrap text-start ">{item.todo}</span>
                <span onClick={() => handleDelete(item)} className="text-wrap">
                  <i className="fa-solid fa-trash"></i>
                </span>
              </li>
            ))}

            <li className="list-group-item text-end">
              {todos.length ? todos.length + ' tareas' : "No hay tareas pendientes"}
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ToDoList;