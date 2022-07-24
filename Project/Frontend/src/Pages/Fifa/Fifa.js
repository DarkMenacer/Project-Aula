import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import React from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark"
import OrgImg from "../../Assets/Organiser.png"
import PartImg from "../../Assets/Participant.png"
import "./Fifa.css" 

const Fifa = () => {

    /* Strings */
    const instruction = "Choose your mode of using";
    const Welcome = "/login";

    return (
        <div className="parent_fifa">
            <div className="content_fifa">
                <div className="wrapper">
                    <div className="title">
                        <Wordmark prompt={instruction} variation={"direction"}/>
                    </div>
                    <div className="avt">
                        <NavLink to={Welcome}><Avatar size={50} icon={<UserOutlined/>}/></NavLink>
                    </div>
                </div>
                <div className="wrapper">
                    <span className="tile">
                        <img src={OrgImg} alt="man_in_a_suit"/>
                        <NavLink to={Welcome} className="mode_choice">Organiser</NavLink>
                    </span>
                    <span className="tile">
                        <img src={PartImg} alt="athelete_in_attire"/>
                        <NavLink to={Welcome} className="mode_choice">Participant</NavLink>
                    </span>
                </div>
               
            </div>
        </div>
    );
}

export default Fifa;