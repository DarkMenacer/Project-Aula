import React, { useState } from "react";
import LoginForm from "./components/Pranav/LoginForm";
//import Signup_one from './components/Signup-one';
//import {BrowserRouter as Router, Link} from 'react-router-dom';

const App = () => {
  const adminUser = {
    email: "pranav@chatur.com",
    password: "pranav",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged IN");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not Match");
      setError("Username or Password is incorrect");
    }
  };

  const Logout = () => {
    console.log("User Logged Out!");
    setUser({ name: "", email: "" });
  };

  return (
    // <Router>
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span> {user.name} </span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <LoginForm Login={Login} error={error} />
        </div>
      )}
    </div>
    // </Router>
  );
};

export default App;
