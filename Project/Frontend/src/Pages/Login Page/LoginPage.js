import React, {useState} from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Avatar from "../../Components/Pranav/Avatar/Avatar";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";
import "./LoginPageStyle.css"
import {useNavigate} from "react-router-dom";

const LoginPage = ({setUser, adminUser}) => {

    /* Variables */
    let allowed = false;

    /* useState variables */
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    
    /* Strings */
    const title = "AULA";
    const welcomePageRoute = '/WelcomePage'

    /* Functions */
    const Login = (details) => {
        if(details.email === adminUser.email && details.password === adminUser.password){
          setUser({name: details.name, email: details.email,});
          allowed = true;
        } 
        else{
          console.log("Details do not Match");
          setError("Username or Password is incorrect");
        }
    };
    
    /* Button Click Functions */
    const navigate = useNavigate();
    const handleLoginBtn = (e) => {
        e.preventDefault();
        Login(details);
        if(allowed){navigate(welcomePageRoute);}
    }

    return (
        <form onSubmit={handleLoginBtn} className="parent_login">
            <div className="content_login">
                <div>
                    <Avatar radius={"7.4rem"}/>
                    <Wordmark variation={"headline"} prompt={title}/>
                </div>
                <div>
                    <hr/>
                    <TextEntry prompt={"Name"} type="text" id="name" name="name" details={details} setDetails={setDetails} />
                    <TextEntry prompt={"Email"} type="email" id="email" name="email" details={details} setDetails={setDetails} />
                    <TextEntry prompt={"Password"} type="password" id="password" name="password" details={details} setDetails={setDetails} />
                    <Button prompt={"Log-in"} variation={"solid_btn"} type={"submit"}/>
                    <Button prompt={"Sign Up"} variation={"outline_btn"} />
                    {error !== "" ? <div className="error">{error}</div> : ""}
                </div>
            </div>
        </form>
    );
}

export default LoginPage;