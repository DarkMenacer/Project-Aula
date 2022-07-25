import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.min.css';

const ProgressBar = ({percent, steps}) => {
  return (
    <div>
        <Progress percent={percent} steps={steps}/>
    </div>
  )
}

export default ProgressBar