import React, {useState} from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Avatar from "../../Components/Pranav/Avatar/Avatar";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";
import "./LoginPageStyle.css"
import {useNavigate} from "react-router-dom";

const LoginPage = ({user, setUser, adminUser}) => {

    /* Variables */
    let allowed = false;

    /* useState variables */
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    
    /* Strings */
    const title = "AULA";
    const welcomePageRoute = '/Success'

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
        if(allowed){navigate(welcomePageRoute, {state:{name:user.name,email:user.email}});}

    }

    return (
        <div className="login_page">
            <div>
                <Avatar radius={"7.4rem"}/>
                <Wordmark variation={"headline"} prompt={title}/>
            </div>
            <div>
                <hr/>
                <TextEntry prompt={"Name"} type="text" id="name" name="name" details={details} setDetails={setDetails} />
                <TextEntry prompt={"Email"} type="email" id="email" name="email" details={details} setDetails={setDetails} />
                <TextEntry prompt={"Password"} type="password" id="password" name="password" details={details} setDetails={setDetails} />
                <Button prompt={"Log-in"} variation={"solid_btn"} action={handleLoginBtn} />
                <Button prompt={"Sign Up"} variation={"outline_btn"} />
                {error !== "" ? <div className="error">{error}</div> : ""}
            </div>
        </div>
    );
}

export default LoginPage;