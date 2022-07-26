import React from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import Wordmark from "../../Components/Pranav/Wordmark/Wordmark";
import { PlusSquareFilled } from "@ant-design/icons"
import 'antd/dist/antd.min.css';
import './Resources.css';

const ParticipantHome = () => {

    /* Strings */
    const informative = "Resources' List";

    /* Component Properties */
    const columns = [
        {title: "Sr.no",dataIndex: "srNo"},
        {title: "Resource name", dataIndex: "resourceName", render:(text) => <NavLink to='/Login'>{text}</NavLink>},
        {title: "Type", dataIndex: "type"},
        {title: "Add", dataIndex: "add"}
    ];

    const data = [
        {key:"1", srNo:1, resourceName:"First Lesson Notes", type:"PDF", add:<PlusSquareFilled />},
        {key:"2", srNo:2, resourceName:"Class Video", type:"MP4", add:<PlusSquareFilled />}
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
