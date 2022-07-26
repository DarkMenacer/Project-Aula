import React, { useState } from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import './SignUpStyle.css';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpFour = ({newUser, setNewUser}) => {

    /* Variables */
    let flag = true;

    /* Hook Variables */
    const navigate = useNavigate();
    const [error, setError] = useState("");

    /* Strings */
    const askName = "Enter your Name";
    const askUsername = "Enter your Username";
    const askPassword = "Enter your Password";
    const confirmPassword = "Confirm your Password";
    const loginPage = "/Login";
    const incompleteDetails = "Enter all the details bitch";
    const currError = "Please enter your ";
    const passDontMatch = "Above passwords don't match";


    /*Component Properties */
    const handleOnChange = (e) =>{
      if(flag){
        for (const [key, value] of Object.entries(newUser)) {
          if(key == e.target.name){
            setError("");
            break;
          }
          else if(value == ""){
              setError(currError + key);
              break;
            }
          }
        }
      flag = false;
      setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    /* Functions */
    const isAllEmpty = () => {
      for (const [value] of Object.entries(newUser)){
          if(value == ""){ return true;}
      }
    }

    /* Button Click Functions */
    const handleSubmitBtn = (e) => {
      e.preventDefault();
      if(!(isAllEmpty)){
        setError(incompleteDetails);
      }
      else if(0){
        /* Confirm Password and Password should match*/ 
      }
      else{
        alert("Account Created!");
        navigate(loginPage);
      }
    };

  if(newUser.gender === "" || newUser.dob === ""){
    return(
      <Navigate to='../SignUpThree'/>
    );
  }

  return (
    <form onSubmit={handleSubmitBtn} className='parent_signup'>
      <div className="content_signup">
        <div>
          <Wordmark prompt={"Sign-up"} variation={"headline"} />
        </div>
        <hr />
        <div className='btn_list'>
            <TextEntry prompt={askName} type={"text"} name={"name"} handleOnChange={handleOnChange} />
            <TextEntry prompt={askUsername} type={"text"} name={"username"} handleOnChange={handleOnChange} />
            <TextEntry prompt={askPassword} type={"password"} name={"password"}handleOnChange={handleOnChange} />
            <TextEntry prompt={confirmPassword} type={"password"} handleOnChange={handleOnChange}/>
            <Button prompt={"Submit"} variation={"solid_btn"} type={"submit"}/>
            <div className="error">{error}</div>
        </div>
        <hr />
      </div>
    </form>
  )
}

export default SignUpFour;