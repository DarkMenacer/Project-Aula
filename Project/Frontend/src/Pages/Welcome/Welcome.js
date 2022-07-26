import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Navigate, NavLink } from "react-router-dom";
import React from "react";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import OrgImg from "../../Assets/Organiser.png";
import PartImg from "../../Assets/Participant.png";
import "./Welcome.css";
import {Dropdown, Menu} from 'antd';
import "antd/dist/antd.min.css";

const Welcome = ({user}) => {
    
    /* Strings */
    const instruction = "Choose your mode, " + user.name;
    const OrganiserRoute = "/OrganiserHome";
    const ParticipantRoute = "/ParticipantHome";
    const LoginRoute = "/Login";

    /* Components Properties */
    const menu = (
        <Menu items= {[
            {label: <NavLink to="MyInfo">My Profile</NavLink>, key: "0"},
            {label: <NavLink to="Devices">Security and Devices</NavLink>, key: "1"},
            {type: "divider"},
            {label: <NavLink to={LoginRoute}>Log Out</NavLink>, key: "2"}
          ]}
        />
      );

    if(user?.name === ""){
        return(<Navigate to={LoginRoute} />);
    }
    else{
        return (
            <div className="parent_welcome">
                <div className="content_welcome">
                    <div className="wrapper">
                        <div className="title1">
                            <Wordmark prompt={instruction} variation={"direction"}/>
                        </div>
                        <div className="avt">
                            <Dropdown overlay={menu} trigger={["click"]}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Avatar size={50} icon={<UserOutlined/>}/>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="wrapper">
                        <span className="tile">
                            <img src={OrgImg} alt="man_in_a_suit"/>
                            <NavLink to={OrganiserRoute} className="mode_choice">Organiser</NavLink>
                        </span>
                        <span className="tile">
                            <img src={PartImg} alt="athelete_in_attire"/>
                            <NavLink to={ParticipantRoute} className="mode_choice">Participant</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;