import React, { useState } from 'react';
import Wordmark from '../../Components/Pranav/Wordmark/Wordmark';
import Button from '../../Components/Pranav/Button/Button';
import TextEntry from '../../Components/Pranav/Text Entry/TextEntry';
import './SignUpStyle.css';
import { useNavigate } from 'react-router-dom';


const SignUpTwo = ({newUser, setNewUser}) => {

    /* Variables */
    let flag = true;

    /* Hook Variables */
    const navigate = useNavigate();
    const [error, setError] = useState("");
      
    /* Strings */
    const askEmail = "Enter your Email Id";
    const askPhone = "Enter your Phone No.";
    const nextPage = "../SignUpThree";
    const currError = "Please enter your ";
    const invalidPhone = "Phone no. should be 10 digits";

    /* Component Properties */
    const handleOnChange = (e) => {
      if(flag){
        for(const [key, value] of Object.entries(newUser)){
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
      setNewUser({...newUser, [e.target.name]: e.target.value});
    };


    /* Button Click Functions */
    const handleSubmitBtn = (e) => {
      e.preventDefault();
      if(newUser.phone == ""){
        setError(currError + "Phone No.");
      }
      else if (Math.floor(Math.log10(parseFloat(newUser.phone))) + 1 != 10){
        setError(invalidPhone);
      }
      else{
        navigate(nextPage, {replace: false});
      }
    };


  return (
    <form onSubmit={handleSubmitBtn} className='parent_signup'>
      <div className="content_signup">
        <div>
          <Wordmark prompt={"Sign-up"} variation={"headline"} />
        </div>
        <hr />
        <div className='btn_list'>
            <TextEntry prompt={askEmail} type={"email"} name={"email"} value={newUser?.email} handleOnChange={handleOnChange}/>
            <TextEntry prompt={askPhone} type={"number"} name={"phone"} value={newUser?.phone} handleOnChange={handleOnChange}/>
            <Button prompt={"Submit"} variation={"solid_btn"} type={"submit"} />
            <div className="error">{error}</div>
        </div>
        <hr />
      </div>
    </form>
  )
}

export default SignUpTwo;