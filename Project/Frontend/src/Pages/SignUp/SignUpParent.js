import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SignUpParent = ({newUser, setNewUser}) => {

    console.log({newUser});
    let foo = true;

    if(newUser.email === "" || newUser.phone === ""){
        return(
            <>
                <Navigate to='SignUpTwo'/>
                <Outlet/>
            </>
        );
    }
    else if((newUser.gender === "" || newUser.dob === "") && foo){
        foo = false;
        return(
            <>
                <Navigate to='/Signup/SignUpThree'/>
                <Outlet/>
            </>
        );
    }
    else if(newUser.name === "" || newUser.username === "" || newUser.password ===""){
        return(
            <Navigate to='/MyInfo'/>
        );
    }
    else{
        return(
            <div><h1>Oh NO!</h1></div>
        );
    }
    
}

export default SignUpParent;