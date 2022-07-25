import React from "react";
import "./Devices.css"
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import ProgressBar from "../../Components/Raghav/Progress Bar/ProgressBar"
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from '@ant-design/icons';
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import Button from "../../Components/Pranav/Button/Button";

const Devices = () => {

    /* Strings */
    const storage = "Your Storage";
    const deviceDetails = "Your Devices";
    const password = "Change Password";
    const dangerzone = "DANGERZONE";
    const oldPass = "Old Password";
    const newPass = "New Password";
    const confirmPass = "Confirm New Password";
    const yesChange = "Confirm Change";
    const delAcc = "DELETE MY ACCOUNT";

    return (
        <div className="parent_devices">
            <div className="content_devices">
                <div className="element">
                    <Wordmark prompt={storage} variation = {"direction"}/>
                    <div className="device_list"><ProgressBar percent={50} steps={25}/></div>
                </div>
                <div className="element">
                    <Wordmark prompt={deviceDetails} variation = {"direction"}/>
                    <div className="device_list">
                        <Avatar icon={<UserOutlined/>}/>
                        <Avatar icon={<UserOutlined/>}/>
                        <Avatar icon={<UserOutlined/>}/>
                    </div>
                </div>
                <div className="element">
                    <Wordmark prompt={password} variation = {"direction"}/>
                    <div className="password_list">
                        <TextEntry prompt={oldPass} type={"password"} name={"oldPass"}/>
                        <TextEntry prompt={newPass} type={"text"} name={"newPass"}/>
                        <TextEntry prompt={confirmPass} type={password} name={"confirmPass"}/>
                    </div>
                    <Button prompt={yesChange} variation={"solid_btn"}/>
                </div>
                <div className="element">
                    <Wordmark prompt={dangerzone} variation = {"headline"}/>
                    <Button prompt={delAcc} variation="solid_btn"/>
                </div>
            
            </div>
        </div>
    );
}

export default Devices;