import React, { useEffect } from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import {Select} from 'antd';
import 'antd/dist/antd.min.css';
import './SignUpStyle.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpThree = ({newUser, setNewUser}) => {
    
    /* Variables */
    const {Option} = Select;
    let flag = true;
    
    /* Hook Variables */
    const navigate = useNavigate();
    
    /* Strings */
    const nextPage = "../SignUpFour";
    
    /* Component Properties */
    const handleOnChangeGender = (e) => {
      /* HAVE TO CHANGE TO STORE THE VALUE */
      setNewUser({...newUser, 'gender': e });
    }

    const handleOnChangeDate = (e) => {
      /* NEED TO COMPLETE THIS*/
    }

    /* Button Click Functions */
    const handleSubmitBtn = (e) => {
      e.preventDefault();
      navigate(nextPage);
    };


  if(newUser.email === "" || newUser.phone === ""){
    return (<Navigate to='../SignUpTwo'/>);
  }
  else{
    return (
      <form onSubmit={handleSubmitBtn} className='parent_signup'>
        <div className="content_signup">
          <div>
            <Wordmark prompt={"Sign-up"} variation={"headline"} />
          </div>
          <hr />
          <div className='btn_list'>
              <Wordmark prompt={"Gender"} variation={"word_wall"} />
              <Select defaultValue={"other"} onChange={handleOnChangeGender}>
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                  <Option value="other">Other</Option>
              </Select>
              <TextEntry prompt={"Date Of Birth"} type={"date"} name={"date"} onChange={handleOnChangeDate}/>
              <Button prompt={"Submit"} variation={"solid_btn"} type={"submit"} />
          </div>
          <hr />
        </div>
      </form>
    )
  }
}

export default SignUpThree;