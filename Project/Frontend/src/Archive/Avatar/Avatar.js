import React from "react";
import Logo from "../../../Assets/AulaLogo.png"
import "./Avatar.css"

const Avatar = ({radius}) => {
    return <img src= {Logo} alt="Logo" className="avatar" style={{width:radius/* , height:radius */}}></img>
}

export default Avatar;