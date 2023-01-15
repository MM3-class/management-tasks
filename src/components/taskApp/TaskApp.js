// import { useState, useEffect } from "react";
import NewTask from "../newTask/NewTask";
import TaskList from "../taskList/TaskList";
import { useUserContext } from "../../context/userContext";

function TaskApp() {
  const { newTask, setNewTask, allTasks, setAllTasks, handleDelete } = useUserContext();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  return (
    <main className="add-todo-container">
      <NewTask
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
export default TaskApp;
