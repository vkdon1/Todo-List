import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    if (taskTitle.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: taskTitle, completed: false },
      ]);
      setTaskTitle("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>

      {/* Add Task Input */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success" : ""
            }`}>
            <span
              className={`${
                task.completed ? "text-decoration-line-through" : ""
              }`}>
              {task.title}
            </span>
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
