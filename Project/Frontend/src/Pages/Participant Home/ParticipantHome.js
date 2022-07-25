import React from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import { CloseCircleOutlined } from "@ant-design/icons"
import 'antd/dist/antd.min.css';
import './ParticipantHome.css';

const ParticipantHome = () => {

    /* Strings */
    const informative = "Participant Tab";

    /* Component Properties */
    const columns = [
        {title: "Sr.no",dataIndex: "srNo"},
        {title: "Event name", dataIndex: "eventName", render:(text) => <NavLink to='/EventHome'>{text}</NavLink>},
        {title: "Organiser Name", dataIndex: "organiserName"},
        {title: "Leave", dataIndex: "leave"}
    ];

    const data = [
        {key:"1", srNo:1, eventName:"Raghav's Piano Class", organiserName:"Pranav", leave:<CloseCircleOutlined />},
        {key:"2", srNo:2, eventName:"Pranav's Photography Class", organiserName:"Raghav", leave:<CloseCircleOutlined />}
    ];

    return (
        <div className="parent_part">
            <div className="content_part">
                <Wordmark prompt={informative} variation={"direction"}/>
                <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>
            </div>
        </div>
    );
}

export default ParticipantHome;
