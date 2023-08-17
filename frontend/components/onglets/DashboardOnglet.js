import React, { useState } from "react";
import Task from "./Task";
import OngletMain from "../OngletMain";

const DashboardOnglet = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <OngletMain>
      <h2>To Do List</h2>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </OngletMain>
  );
};

export default DashboardOnglet;
