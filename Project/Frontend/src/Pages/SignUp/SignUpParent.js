import React from "react";
import { Outlet } from "react-router-dom";

const SignUpParent = () => {
    return(
        <>
            Sign Up Pages
            <Outlet/>
        </>
    );

}

export default SignUpParent;