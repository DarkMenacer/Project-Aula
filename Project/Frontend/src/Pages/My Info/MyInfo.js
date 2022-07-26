import React from "react";
import { Avatar, Select} from "antd";
import 'antd/dist/antd.min.css';
import { UserOutlined } from '@ant-design/icons';
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Button from "../../Components/Pranav/Button/Button";
import "./MyInfo.css";

const MyInfo = () => {

    /* Variables */
    const {Option} = Select;

    /* Strings */
    const realName = "Your Name";
    const useName = "Your Username";
    const editProfile = "Edit My Profile";
    const dob = "Date Of Birth :";
    const mail = "Email :";
    const phone = "Phone No. :";
    const gender = "Gender :";

    return(
        <div className="parent_info">
            <div className="content_info">
                <div className="panel_one">
                    <Avatar className="my_avatar" size={150} icon={<UserOutlined/>}/>
                    <div className="your_name">
                        <Wordmark prompt={realName} variation="direction"/>
                    </div>
                    <div className="your_username">
                        <Wordmark prompt={useName} variation="word_wall"/>
                    </div>
                    <Button prompt={editProfile} variation={"solid_btn"} />
                </div>          
                <div className="panel_two">
                    <Wordmark prompt={dob} variation={"word_wall"} />
                    <input type={"date"} name={"date"} />
                    <Wordmark prompt={mail} variation={"word_wall"} />
                    <input type={"email"} name={"email"} />
                    <Wordmark prompt={phone} variation={"word_wall"} />
                    <input type={"tel"} name={"phnumber"} />
                    <Wordmark prompt={gender} variation={"word_wall"} />
                    <Select defaultValue={"male"}>
                        <Option value="female">Female</Option>
                        <Option value="male">Male</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </div>                
            </div>
        </div>
    );
}

export default MyInfo;
