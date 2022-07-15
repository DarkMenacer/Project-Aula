import React, {useState} from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Avatar from "../../Components/Pranav/Avatar/Avatar";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";
import "./LoginPageStyle.css"
import { Link , useNavigate} from "react-router-dom";

const LoginPage = ({Login, error}) => {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const submitForm = (e) => {
        e.preventDefault();
        Login(details);
    };

    /* Strings */
    const title = "AULA";
    const welcomePageRoute = '/Success'

    /* Button Click Functions */

    const navigate = useNavigate();
    const handleLoginBtn = () => {
        navigate(welcomePageRoute, {state:{name:"Pranav",email:""}});
    }

    return (
        <form onSubmit={submitForm}>
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
        </form>
    );
}

export default LoginPage;