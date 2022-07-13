import React, { useState } from "react";
import "./Login.css";
import Button from "../../Components/Pranav/Button/Button";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Avatar from "../../Components/Pranav/Avatar/Avatar";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    Login(details);
  };

  const title = "AULA";

  return (
    <form onSubmit={submitForm}>
      <div className="form-inner">
        <Avatar radius={"7.4rem"}/>
        <Wordmark variation={"headline"} prompt={title}/>
        <div className="form-elements">
          <hr/>
          <TextEntry prompt={"Name"} type="text" id="name" name="name" details={details} setDetails={setDetails} />
          <TextEntry prompt={"Email"} type="email" id="email" name="email" details={details} setDetails={setDetails} />
          <TextEntry prompt={"Password"} type="password" id="password" name="password" details={details} setDetails={setDetails} />
          <Button prompt={"Log-in"} variation={"solid_btn"} />
          <Button prompt={"Sign Up"} variation={"outline_btn"} />
          {error !== "" ? <div className="error">{error}</div> : ""}
        </div>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <Wordmark prompt={"Word Wall"} variation={"word_wall"}/> */}
      </div>  
    </form>
  );
}

export default LoginForm;
