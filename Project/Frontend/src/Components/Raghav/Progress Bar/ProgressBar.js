import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const ProgressBar = ({percent}) => {
  return (
    <div>
        <Progress percent={percent} steps="3"/>
    </div>
  )
}

export default ProgressBar