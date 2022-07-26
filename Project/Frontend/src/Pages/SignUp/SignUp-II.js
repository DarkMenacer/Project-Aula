import React from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import './SignUpStyle.css';
import { useNavigate } from 'react-router-dom';

const SignUpTwo = () => {
  
    /* Hook Variables */
    const navigate = useNavigate();
      
    /* Strings */
    const askEmail = "Enter your Email Id";
    const askPhone = "Enter your Phone No.";
    const nextPage = "../SignUpThree";


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
            <TextEntry prompt={askEmail} type={"email"} name={"email"} />
            <TextEntry prompt={askPhone} type={"number"} name={"phone"} />
            <Button prompt={"Submit"} variation={"solid_btn"} action={handleSubmitBtn}/>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default SignUpTwo;