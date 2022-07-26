import React from 'react';
import Button from '../../Components/Pranav/Button/Button';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import './SignUpStyle.css'
import {useNavigate} from 'react-router-dom';

function SignUpOne() {

    /* Hook Variables */
    const navigate = useNavigate();
    
    /* Strings */
    const newAccountRoute = "SignUpTwo";
    const googleSignUp = "Sign-up with Google";
    const githubSignUp = "Sign-up with GitHub";
    const newAcc = "New Account";

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
          <Button prompt={googleSignUp} variation={"solid_btn"} />
          <Button prompt={githubSignUp} variation={"solid_btn"} />
          <Button prompt={newAcc} variation={"outline_btn"} action={handleNewAccBtn}/>
        </div>
      </div>
    </div>
  )
}

export default SignUpOne;