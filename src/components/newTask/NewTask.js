import "./newTask.css";
import WelcomeOnboard from "../../assets/WelcomeOnboard.png";
import { Link } from "react-router-dom";

function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <>
      <header className="header">
        <h1>Welcome Onboard!</h1>
        <img
          src={WelcomeOnboard}
          alt="Welcome-Onboard"
          className="welcome-onboard"
        />
      </header>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <p className="add-to-field">Add What you want to do later on..</p>
        <input
          type="text"
          name="title"
          value={newTask.title || ""}
          onChange={handleChange}
          className="field"
          placeholder="New Task"
        />
        {!newTask.title ? null : (
          <textarea
            name="details"
            value={newTask.details || ""}
            onChange={handleChange}
            className="field details"
            placeholder="Details..."
          ></textarea>
        )}

        <input type="submit" value="Add to list" className="submit" />
        <Link
          to="/profile"
          className="submit"
          style={{ marginTop: 5, paddingTop: 10 }}
        >
          Go to your Profile
        </Link>
      </form>
    </>
  );
}
export default NewTask;
