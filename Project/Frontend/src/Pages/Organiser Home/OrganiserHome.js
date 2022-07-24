import React from "react";
import MenuBar from "../../Components/Raghav/Menu Bar/MenuBar";
import "./OrganiserHome.css";
import { Table } from "antd";
import 'antd/dist/antd.min.css';
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark"
import { NavLink } from "react-router-dom";

const OrganiserHome = () =>{


    /* Strings */
    const informative = "Organiser Tab";

    /* Component Properties */
    const menuList = [
        {variation: "outline_btn", prompt:"Create Event"},
        {variation: "outline_btn", prompt:"Manage Event"},
    ];

    const columns = [
        {title: "Sr.no",dataIndex: "srNo"},
        {title: "Event name", dataIndex: "eventName", render:(text) => <NavLink to='/Login'>{text}</NavLink>},
        {title: "No. of participants", dataIndex: "noOfParticipants"}

    ];

    const data = [
        {key:"1", srNo:1, eventName:"Raghav's Piano Class", noOfParticipants:1},
        {key:"2", srNo:2, eventName:"Pranav's Photography Class", noOfParticipants:1}
    ];


    return(
        <div className="parent_org">
            <div className="content_org">
                <Wordmark prompt={informative} variation={"direction"}/>
                <MenuBar menuList={menuList}/>
                <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>
            </div>
        </div>
    );
}

export default OrganiserHome;