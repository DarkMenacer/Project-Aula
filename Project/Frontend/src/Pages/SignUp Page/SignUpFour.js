import React from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import './SignUpStyle.css';
import { useNavigate } from 'react-router-dom';

const SignUpFour = () => {

    /* Hook Variables */
    const navigate = useNavigate();

    /* Strings */
    const askName = "Enter your Name";
    const askUsername = "Enter your Username";
    const askPassword = "Enter your Password";
    const confirmPassword = "Confirm your Password";
    const loginPage = "/LoginPage";

    /* Button Click Functions */
    const handleSubmitBtn = () => {
      alert("Account Created Bitch!");
      navigate(loginPage);
    };

  return (
    <div className='parent_signup'>
      <div className="content_signup">
        <div>
          <Wordmark prompt={"Sign-up"} variation={"headline"} />
        </div>
        <hr />
        <div className='btn_list'>
            <TextEntry prompt={askName} type={"text"} name={"name"} />
            <TextEntry prompt={askUsername} type={"text"} name={"username"} />
            <TextEntry prompt={askPassword} type={"password"} name={"password"} />
            <TextEntry prompt={confirmPassword} type={"password"} />
            <Button prompt={"Submit"} variation={"solid_btn"} type={"submit"} action={handleSubmitBtn}/>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default SignUpFour;