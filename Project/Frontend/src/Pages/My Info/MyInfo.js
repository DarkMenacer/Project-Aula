import React from "react";
import { Avatar, Select} from "antd";
import 'antd/dist/antd.min.css';
import { UserOutlined } from '@ant-design/icons';
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import Button from "../../Components/Pranav/Button/Button";
import TextEntry from "../../Components/Pranav/Text Entry/TextEntry";
import "./MyInfo.css";


const MyInfo = () => {

    /* Variables */
    const {Option} = Select;


    return(
        <div className="parent_info">
            <div className="content_info">
                
                <div className="panel_one">
                    <Avatar className="my_avatar" size={150} icon={<UserOutlined/>}/>
                    <div className="your_name">
                        <Wordmark prompt={"Your Name"} variation="direction"/>
                    </div>
                    <div className="your_username">
                        <Wordmark prompt={"Your Username"} variation="word_wall"/>
                    </div>
                    <Button prompt={"Edit My Profile"} variation={"solid_btn"} />
                    {/* <Wordmark prompt={"Edit Your Photo"} variation={"word_wall"} /> */}
                </div>          

                <div className="panel_two">
                    <Wordmark prompt={"Date Of Birth :"} variation={"word_wall"} />
                    <input type={"date"} name={"date"} />

                    <Wordmark prompt={"Email :"} variation={"word_wall"} />
                    <input type={"email"} name={"email"} />

                    <Wordmark prompt={"Phone No. :"} variation={"word_wall"} />
                    <input type={"tel"} name={"phnumber"} />

                    <Wordmark prompt={"Gender :"} variation={"word_wall"} />
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
