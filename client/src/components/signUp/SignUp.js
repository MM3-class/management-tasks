import "./signUp.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPwd: "",
  });
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPwd: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validForm = (event) => {
    event.preventDefault();
    let inputError = {
      fullName: "",
      email: "",
      password: "",
      confirmPwd: "",
    };
    if (!formInput.fullName && !formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        fullName: "Name is Required",
        email: "Email is Required",
        password: "Password is Required",
      });
      return;
    }
    if (!formInput.fullName) {
      setFormError({
        ...inputError,
        fullName: "empty name",
      });
      return;
    }
    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "empty email",
      });
      return;
    }
    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "empty password",
      });
      return;
    }
    if (!formInput.confirmPwd) {
      setFormError({
        ...inputError,
        confirmPwd: "confirm Password",
      });
      return;
    }
    if (formInput.confirmPwd !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPwd: "password and confirm password does not match",
      });
      return;
    }
    //check the output from user in console inspection, such as submit to backend
    console.log(JSON.stringify(formInput, "", 2));

    // Form has submitted then clear and reset the FORM for a new input user
    setFormInput({
      fullName: "",
      email: "",
      password: "",
      confirmPwd: "",
    });
    setFormError({
      fullName: "",
      email: "",
      password: "",
      confirmPwd: "",
    });
    // Forward the USER to task App when signed up 
    navigate('/taskApp')
  };

  return (
    <div className="sign-up">
      <div className="header">
        <h1>Welcome Onboard!</h1>
        <Link to="/" className="links">Let's help you meet up your task</Link>
      </div>
      <form className="signUp-field" onSubmit={validForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formInput.fullName.name}
          onChange={handleChange}
          className={`form ${formError.fullName ? "danger" : ""}`}
        />
        {formError.fullName && <small>{formError.fullName}</small>}
        <input
          type="email"
          name="email"
          placeholder="Enter your Email address"
          value={formInput.email}
          onChange={handleChange}
          className={`form ${formError.email ? "danger" : ""}`}
        />
        {formError.email && <small>{formError.email}</small>}
        <input
          type="password"
          name="password"
          placeholder="Create a Password"
          value={formInput.password}
          onChange={handleChange}
          className={`form ${formError.password ? "danger" : ""}`}
        />
        {formError.password && <small>{formError.password}</small>}
        <input
          type="password"
          name="confirmPwd"
          placeholder="Confirm your Password"
          value={formInput.confirmPwd}
          onChange={handleChange}
          className={`form ${formError.confirmPwd ? "danger" : ""}`}
        />
        {formError.confirmPwd && <small>{formError.confirmPwd}</small>}

        <input type="submit" value="Sign Up" className="submit"/> 

      </form>
      <small>
        Already have an Account? <Link to="/signIn" className="links">Sign in</Link>
      </small>
    </div>
  );
}
export default SignUp;

