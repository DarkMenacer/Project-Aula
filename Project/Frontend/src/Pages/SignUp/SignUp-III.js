import React from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import {Select} from 'antd';
import 'antd/dist/antd.min.css';
import './SignUpStyle.css';
import { useNavigate } from 'react-router-dom';

const SignUpThree = () => {
    
    /* Variables */
    const {Option} = Select;
    
    /* Hook Variables */
    const navigate = useNavigate();
    
    /* Strings */
    const nextPage = "/SignUpFour";
    
    /* Button Click Functions */
    const handleSubmitBtn = () => {
      navigate(nextPage);
    };

  return (
    <div className='parent_signup'>
      <div className="content_signup">
        <div>
          <Wordmark prompt={"Sign-up"} variation={"headline"} />
        </div>
        <hr />
        <div className='btn_list'>
            <Wordmark prompt={"Gender"} variation={"word_wall"} />
            <Select defaultValue={"male"}>
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
                <Option value="other">Other</Option>
            </Select>
            <TextEntry prompt={"Date Of Birth"} type={"date"} name={"date"}/>
            <Button prompt={"Submit"} variation={"solid_btn"} type={"submit"} action={handleSubmitBtn}/>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default SignUpThree;