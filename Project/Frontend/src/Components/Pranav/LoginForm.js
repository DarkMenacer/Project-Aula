import React, { useState } from "react";
import "../../Styles/Pranav/login.css";
import Button from "./Button/Button";
import TextEntry from "./Text Entry/TextEntry";
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
          <TextEntry prompt={"Name"} type="text" id="name" name="name" details={details} setDetails={setDetails} />
          <TextEntry prompt={"Email"} type="email" id="email" name="email" details={details} setDetails={setDetails} />
          <TextEntry prompt={"Password"} type="password" id="password" name="password" details={details} setDetails={setDetails} />
          <Button prompt={"Log-in"} variation={"solid_btn"} />
          <Button prompt={"Sign Up"} variation={"outline_btn"} />
        </div>
      </div>

      
    </form>
    //</Router>
  );
}

export default LoginForm;
