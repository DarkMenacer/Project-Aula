import React from "react";
import MenuBar from "./Menu Bar/MenuBar";

const Test = () => {
    /*    Menu Bar    */
    const menuList = [
        {variation : 'outline_btn', prompt : 'Create Event'},
        {variation : 'outline_btn', prompt : 'Manage Events'}
    ];

    return (
        <div>
            <MenuBar
                menuList = {menuList}
            />
        </div>
    );

    /* ----------- */

    

};

export default Test;
