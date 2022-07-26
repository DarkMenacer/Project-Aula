import React, {useState} from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Avatar from "../../Components/Pranav/Avatar/Avatar";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";
import "./LoginStyle.css"
import {useNavigate} from "react-router-dom";

const LoginPage = ({setUser, adminUser}) => {
    
    /* Variables */
    let allowed = false;
    let flag = true;
    let isAllEmtpyFlag = false;

    /* Hook variables */
    const [details, setDetails] = useState({ 
        name: "", 
        email: "", 
        password: "" 
    });
    const [error, setError] = useState();
    const navigate = useNavigate();
    
    /* Strings */
    const title = "AULA";
    const welcomePageRoute = "/Welcome";
    const signupPageRoute = "/SignUp";

    /* Functions */
    const isAllEmpty = () => {
        for (const [key, value] of Object.entries(details)){
            if(value == ""){
                return true;
            }
        }
    }

    const Login = (details) => {
        if(details.email === adminUser.email && details.password === adminUser.password){
          setUser({name: details.name, email: details.email,});
          allowed = true;
        } 
        else if(isAllEmpty){
            setError("Enter all the details bitch");
        }else{
            console.log("Details do not Match");
            setError("Username or Password is incorrect");
        }
    };

    const handleOnChange = (e) => {
      if(flag){
        for (const [key, value] of Object.entries(details)) {
          if(key == e.target.name){
            setError("");
            break;
          }else if(value == ""){
              const error = "Please enter your " + key;
              setError(error);
              break;
            }
          }
        }
      flag = false;
      setDetails({ ...details, [e.target.name]: e.target.value })
    }
    
    /* Button Click Functions */
    const handleLoginBtn = (e) => {
        e.preventDefault();
        Login(details);
        if(allowed){navigate(welcomePageRoute);}
    }
    const handleSignupBtn = (e) => {
        e.preventDefault();
        navigate(signupPageRoute);
    }

    return (
        <form onSubmit={handleLoginBtn} className="parent_login">
            <div className="content_login">
                <div className="logo">
                    <Avatar radius={"7.4rem"}/>
                    <Wordmark variation={"headline"} prompt={title}/>
                </div>
                <div>
                    <hr/>
                    <TextEntry prompt={"Name"} type="text" id="name" name="name" handleOnChange={handleOnChange} value={details.name}/>
                    <TextEntry prompt={"Email"} type="email" id="email" name="email" handleOnChange={handleOnChange} value={details.email}/>
                    <TextEntry prompt={"Password"} type="password" id="password" name="password" handleOnChange={handleOnChange} value={details.password}/>
                    <Button prompt={"Log-in"} variation={"solid_btn"} type={"submit"}/>
                    <Button prompt={"Sign Up"} variation={"outline_btn"} action={handleSignupBtn}/>
                    {error !== "" ? <div className="error">{error}</div> : ""}
                </div>
            </div>
        </form>
    );
}
export default LoginPage;