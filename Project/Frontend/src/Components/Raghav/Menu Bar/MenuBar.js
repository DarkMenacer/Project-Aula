import React from 'react';
import "./MenuBarStyle.css";
import Button from "../Button/Button"

const MenuBar = ({menuList}) => {
    return (
        <div className="container">
            {menuList.map((menuItem) => {
                return <Button variation={menuItem.variation} prompt={menuItem.prompt} />
            })}
        </div>
    );
};

export default MenuBar;