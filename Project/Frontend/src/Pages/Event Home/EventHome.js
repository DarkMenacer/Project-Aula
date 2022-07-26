import React from 'react';
import Button from '../../Components/Pranav/Button/Button';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import "./EventHome.css";
import 'antd/dist/antd.min.css';
import { Popover, Steps, Table } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';

const EventHome = ({role}) => {

    /* Hook Variables */
    const navigate = useNavigate();

    /* Strings */
    const eventName = "Event Name";
    const timelineInfo = (role === "Organiser") ? "Event Timeline" : "Agenda";
    const resourcesRoute = "Resources";

    /* Component Properties */
    const menuList = [
        {variation: "outline_btn", prompt:"Resources", action: handleResourcesBtn},
        {variation: "outline_btn", prompt:"Timeline", action: handleTimelineBtn},
    ];

    const { Step } = Steps;    
    const customDot = (dot, { status, index }) => (
        <Popover
          content={
            <span>
              step {index} status: {status}
            </span>
          }
        >
          {dot}
        </Popover>
    );


    const columns = [
        {title: "Sr.no",dataIndex: "srNo"},
        {title: "Participant Name", dataIndex: "participantName"},
        {title: "Meeting Time", dataIndex: "meetingTime"},
        {title: "Agenda", dataIndex: "agenda", render:(text) => <NavLink to='/Login'>{text}</NavLink>}
    ];

    const data = [
        {key:"1", srNo:1, participantName:"Raghav", meetingTime:"4:00 - 5:00", agenda:<LinkOutlined />},
        {key:"2", srNo:2, participantName:"Pranav", meetingTime:"4:00 - 5:00", agenda:<LinkOutlined />}
    ];


    /* Button Click Functions */

    function handleResourcesBtn(e){
        navigate(resourcesRoute);
    }

    function handleTimelineBtn(e){
        console.log(e.target);
    }


    return (
        <div className='parent_eve_home'>
            <div className="content_eve_home">
                <div className="title">
                    <div className="wmk">
                        <Wordmark prompt={eventName} variation="direction" />
                    </div>
                    <div className="btn">
                        <Button className="btn" variation={menuList[0].variation} prompt={menuList[0].prompt} action={menuList[0].action} />
                    </div>
                    <div className="btn">
                        <Button className="btn" variation={menuList[1].variation} prompt={menuList[1].prompt} action={menuList[1].action} />
                    </div>
                </div>

                <div className="event_timeline">
                    <Wordmark prompt={timelineInfo} variation="word_wall" />
                    <Steps current={1} progressDot={customDot}>
                        <Step title="Finished" description="You can hover on the dot." />
                        <Step title="In Progress" description="You can hover on the dot." />
                        <Step title="Waiting" description="You can hover on the dot." />
                    </Steps>
                </div>

                <div className="part_list">
                    <Table columns={columns} dataSource={data} pagination={false} bordered={true}/>
                </div>

            </div>
        </div>
  )
}

export default EventHome;