import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
  const LOCAL_STORAGE_KEY = "todo item";
  const retrieveItem = () => {
    const todoItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todoItem) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    } else {
      return [];
    }
  };
  const [allTasks, setAllTasks] = useState(retrieveItem());
  const [newTask, setNewTask] = useState({});
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allTasks));
  }, [allTasks]);
  const handleDelete = (itemToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== itemToRemove));
  };
const USER = {
    user: "",
    password: "",
    validPwd: "123456",
    isSigned: false
}
  const [input, setInput] = useState(USER);
  function signIn (newUser) {
    setInput({
        isSigned: true,
        user: newUser
    })
  }
function signOut () {
    setInput(USER)
navigate("/")
}

  return (
    <userContext.Provider
      value={{ newTask, setNewTask, allTasks, setAllTasks, handleDelete, input, signIn, signOut, setInput }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const { newTask, setNewTask, allTasks, setAllTasks, handleDelete, input, signIn, signOut, setInput } =
    useContext(userContext);

  return { newTask, setNewTask, allTasks, setAllTasks, handleDelete, input, signIn, signOut, setInput };
};
