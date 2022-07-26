import React from 'react';
import Button from '../../Components/Pranav/Button/Button';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import './SignUpStyle.css'
import {useNavigate} from 'react-router-dom';

function SignUpOne() {

    /* Hook Variables */
    const navigate = useNavigate();
    
    /* Strings */
    const newAccountRoute = "/SignUpTwo";

    /* Button Click Functions */
    const handleNewAccBtn = () => {
      navigate(newAccountRoute);
    };


  return (
    <div className='parent_signup'>
      <div className="content_signup">
        <div>
          <Wordmark prompt={"Welcome"} variation={"headline"} />
        </div>
        <hr />
        <div className='btn_list'>
          <Button prompt={"Sign-up with Google"} variation={"solid_btn"} />
          <Button prompt={"Sign-up with Github"} variation={"solid_btn"} />
          <Button prompt={"New Account"} variation={"outline_btn"} action={handleNewAccBtn}/>
        </div>
      </div>
    </div>
  )
}

export default SignUpOne;