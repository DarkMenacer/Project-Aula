import React from "react";
import "../../Styles/Pranav/text_entry_style.css"

const Text_Entry = ({prompt}) => {

    return <div className="Text_Entry">
        <span>{prompt}: </span>
        <span> <input type="text"/></span>
    </div>

}

export default Text_Entry;