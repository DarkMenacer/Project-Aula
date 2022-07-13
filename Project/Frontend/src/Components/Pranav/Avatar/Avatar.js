import React from "react";
import Logo from "../../../Assets/DarkMenacerLogo.png"
import "./Avatar.css"

const Avatar = ({radius}) => {
    return <img src= {Logo} alt="Picture" className="avatar" style={{width:radius/* , height:radius */}}></img>
}

export default Avatar;