import NewTask from "../newTask/NewTask";
import TaskList from "../taskList/TaskList";
import { useUserContext } from "../../context/userContext";
import api from "../../api/tasks";

function TaskApp() {
  const { newTask, setNewTask, allTasks, setAllTasks, handleDelete } =
    useUserContext();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({
      ...prev,
      id: Date.now(),
      [name]: value,
    }));
  };
// ADD Task to List then Access Frontend and Backend Data
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    const response = await api.post("/tasks", newTask);
    setAllTasks((prev) => [...prev, response.data]);
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
