import "./signIn.css";
import React from "react";
import welcomeBack from "../../assets/welcomeBack.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../context/userContext";

function SignIn() {
  const navigate = useNavigate();
  const {input, setInput, signIn} = useUserContext();
  const [uncorrected, setUncorrected] = useState({
    user: "",
    password: "",
    validPwd: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const valid = (event) => {
    console.log(input.user)
    event.preventDefault();
    let errorInput = {
      user: "",
      password: "",
    };
    if (!input.user) {
      setUncorrected({
        ...errorInput,
        user: "Failed is Required",
      });
      return;
    }
    if (!input.password) {
      setUncorrected({
        ...errorInput,
        password: "Password is Required",
      });
      return;
    }
    if (input.password !== input.validPwd) {
      setUncorrected({
        ...errorInput,
        password: "Invalid Password || 'PASSWORD is (123456) 😉'",
      });
      return;
    }
    setInput({
      user: "",
      password: "",
    });
    setUncorrected({
      user: "",
      password: "",
    });
    console.log(JSON.stringify(input, "", 2));
    navigate("/profile");
    
    signIn(input.user)
  };
 
  return (
    <div className="sign-up">
      <div className="header">
        <h1>Welcome Onboard!</h1>
        <img src={welcomeBack} alt="welcome back" />
      </div>
      <form className="signUp-field" onSubmit={valid}>
        <input
          type="text"
          name="user"
          placeholder="Enter your Name"
          className="form"
          value={input.user}
          onChange={handleChange}
        />
        {uncorrected.user && <small>{uncorrected.user}</small>}
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          className="form"
          value={input.password}
          onChange={handleChange}
        />
        {uncorrected.password && <small>{uncorrected.password}</small>}
        <div className="forgat-password">
          <Link to="/pageNotFound" className="links">
            Forgat Password?
          </Link>
        </div>
        <input type="submit" value="Sign In" className="submit" />
      </form>
      <small>
        Don't have an account ?
        <Link to="/signUp" className="links">
          Sign Up
        </Link>
      </small>
    </div>
  );
}

export default SignIn;
