import React, { useState } from "react";
import "../../Styles/Pranav/login.css";
import Button from "../Pranav/Button";
import Text_Entry from "./Text_Entry";

//import {BrowserRouter as Router, Link} from 'react-router-dom';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    //<Router>
    <form onSubmit={submitForm}>
      <div className="form-inner">
        <h2>
          <span className="head">AULA</span>
        </h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-elements">
          <Text_Entry
            prompt={"Name"}
            type="text"
            id="name"
            name="name"
            details={details}
            setDetails={setDetails}
          ></Text_Entry>
          <Text_Entry
            prompt={"Email"}
            type="email"
            id="email"
            name="email"
            details={details}
            setDetails={setDetails}
          ></Text_Entry>
          <Text_Entry
            prompt={"Password"}
            type="password"
            id="password"
            name="password"
            details={details}
            setDetails={setDetails}
          ></Text_Entry>

          <Button prompt={"Log-in"} />
          <Button prompt={"Sign Up"} />

          {/* <Router>
                  <Link to="./Signup-one.js">
                  <button>HELLO</button>
                  </Link>
                  </Router> */}
        </div>
      </div>
    </form>
    //</Router>
  );
}

export default LoginForm;
