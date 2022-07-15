import React from "react";
import Button from "../../Components/Pranav/Button/Button";
import { useNavigate } from "react-router-dom";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";

const WelcomePage = ({user}) => {

    /* Strings */
    const welcome = "Welcome " + user.name;
    const loginPageRoute = '/LoginPage'

    /* Button Click Functions */

    const navigate = useNavigate();
    const handleLogoutBtn = () => {navigate(loginPageRoute);}

    return (
    <div>
        <Wordmark prompt={welcome} variation="direction"/>
        <Button prompt={"Logout"} variation={"solid_btn"} action={handleLogoutBtn} />
    </div>
    );
}

export default WelcomePage;