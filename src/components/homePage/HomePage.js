import getStarted from "../../assets/getStarted.png";
import "./homePage.css";
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div className="home-page">
      <div className="home-img">
        <img src={getStarted} alt="getStarted" />
      </div>
      <div className="home-content">
        <h2>Get things done with ToDo</h2>
        <p className="get-started">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore!
          Animi nemo aut atque, deleniti nihil dolorem repellendus.
        </p>
        <Link to="/signIn">
        <input
          type="submit"
          value="Get Started"
          className="submit"
        />
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
