import React from "react";
import "./WorkmarkStyle.css"

const Wordmark = ({variation, prompt}) => {
    
    return <span className={variation}>
        {prompt}
    </span>
}

export default Wordmark;