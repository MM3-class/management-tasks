import React from "react";
import TaskApp from "../components/taskApp/TaskApp";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import HomePage from "../components/homePage/HomePage";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/signIn/SignIn";
import Profile from "../components/profile/Profile";
import Protected from "../components/protected/Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserProvider } from "../context/userContext";
function App() {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* Protect component is ready for block <TaskApp/> and <Profile/> once you change {signIn} to false inside protected component*/}
            <Route element={<Protected />}>
              <Route path="/taskApp" element={<TaskApp />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
