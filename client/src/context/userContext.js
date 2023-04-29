import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/tasks";
export const userContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

const USER = {
  user: "",
  password: "",
  validPwd: "123456",
  isSigned: false,
};
export const UserProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [input, setInput] = useState(USER);
  const navigate = useNavigate();

  // GET DATA from server side Backend
  const retrieveItem = async () => {
    const response = await api.get("/tasks");
    return response.data;
  };
  // DELETE DATA FROM server-side Backend and Frontend
  const handleDelete = async (itemToRemove) => {
    await api.delete(`/tasks/${itemToRemove}`)
    setAllTasks((prev) => prev.filter((task) => task.id !== itemToRemove));
  };
  useEffect(() => {
    const getAllData = async () => {
      const allData = await retrieveItem();
      if (allData) return setAllTasks(allData);
    };
    getAllData();
  }, []);

  function signIn(newUser) {
    setInput({
      isSigned: true,
      user: newUser,
    });
  }
  function signOut() {
    setInput(USER);
    navigate("/");
  }

  return (
    <userContext.Provider
      value={{
        newTask,
        setNewTask,
        allTasks,
        setAllTasks,
        handleDelete,
        input,
        signIn,
        signOut,
        setInput,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const {
    newTask,
    setNewTask,
    allTasks,
    setAllTasks,
    handleDelete,
    input,
    signIn,
    signOut,
    setInput,
  } = useContext(userContext);

  return {
    newTask,
    setNewTask,
    allTasks,
    setAllTasks,
    handleDelete,
    input,
    signIn,
    signOut,
    setInput,
  };
};
