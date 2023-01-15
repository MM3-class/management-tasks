import "./profile.css";
import profile from "../../assets/profile.jpeg";
import todoTasks from "../../assets/todoTasks.png";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

function Profile() {
  const {allTasks, handleDelete, input, signOut} = useUserContext();
  console.log(input)

  return (
    <div className="profile-container">
      <div className="profile-name">
        <div className="profile-details">
          <img src={profile} alt="profile Img" />
        </div>
        <h3>Welcome {input.isSigned ? input.user : "Dear"}</h3>
        <button onClick={signOut} className="logout"><Link to="/signIn"></Link>Logout</button>
      </div>
      <div className="photo">
        <img src={todoTasks} alt="todo tasks" />
      </div>
     <div className="extend-list">
      {
        allTasks.map(({title, id, details}) => (
                    <div className="task-list-profile" key={id} >
                        <input type="checkbox" className="checkbox"/>
                        <div className="description">
                            <label className='list-item'><h4 className='title'>{title}</h4></label>
                            {!details ? null : <span className='details'>{details}</span>}
                        </div>
                        <button className='remove' onClick={()=>{handleDelete(id)}}>X</button>
                    </div> 
                ))
      }
     </div>
      <div className="go-back-new-task" style={{margin: "40px auto", textAlign: "center"}}>
        <Link to="/taskApp">
          <button className="submit">New Task</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
