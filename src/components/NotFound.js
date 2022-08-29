import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Not Found!</h1>
      <h2>
        <Link to="/">Go To Home Page</Link>
      </h2>
    </div>
  );
};

export default NotFound;
