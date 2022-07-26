import React from "react";
import { Table } from "antd";
import 'antd/dist/antd.min.css';
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import "./ManageEvents.css"
import {CloseCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ManageEvents = () => {

    /* Strings */
    const informative = "Event List";
    const deleteEvent = "/";
    const eventName = "/Login";
    const addParticipants = "/Login"; 

    /* Component Properties */
    const columns = [
        {title:"Delete",dataIndex:"delete", render:(text) => <Link to={deleteEvent}>{text}</Link>},
        {title:"Event Name",dataIndex:"eventName", render:(text) => <Link to={eventName}>{text}</Link>},
        {title:"No. of Participants",dataIndex:"noOfParticipants", render:(text) => <Link to={addParticipants}>{text}</Link>}
    ];

    const data = [
        {key:1,delete:<CloseCircleOutlined/>,eventName:"Raghav's Piano Class",noOfParticipants:<PlusCircleOutlined />},
        {key:2,delete:<CloseCircleOutlined/>,eventName:"Pranav's Photography Class",noOfParticipants:<PlusCircleOutlined />}
    ];

    return (
        <div className="parent_man_eve">
            <div className="content_man_eve">
                <Wordmark prompt={informative} variation={"direction"}/>
                <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>
            </div>
        </div>
    );
}

export default ManageEvents;