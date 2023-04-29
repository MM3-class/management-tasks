import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div style={{ height: "90vh", textAlign: "center", padding: "50px 0" }}>
      <h1>Page Not Found</h1>
      <Link to='/'>
        <button className="submit">Go To Home</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
