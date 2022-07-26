import React from 'react';
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
    
    /* Hook Variables */
    const navigate = useNavigate();
    
    /* Strings */
    const nextPage = "../SignUpFour";
    const gender = "Gender";
    const dob = "Date Of Birth";
    const submit = "Submit";
    
    /* Component Properties */
    const handleOnChangeGender = (e) => {
      setNewUser({...newUser, 'gender': e });
    }

    /* Button Click Functions */
    const handleSubmitBtn = (e) => {
      e.preventDefault();
      /* DATE NOT BEING TAKEN IN THE INPUT */
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
              <Wordmark prompt={gender} variation={"word_wall"} />
              <Select defaultValue={"Please Select"} onChange={handleOnChangeGender}>
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                  <Option value="other">Other</Option>
              </Select>
              <TextEntry prompt={dob} type={"date"} name={"date"}/>
              <Button prompt={submit} variation={"solid_btn"} type={"submit"} />
          </div>
          <hr />
        </div>
      </form>
    )
  }
}

export default SignUpThree;