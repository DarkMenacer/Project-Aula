import React from 'react'
import "../../Styles/Pranav/buttonstyle.css"

const Button = ({prompt}) => {
  return (
    <span>
        <button>{prompt}</button>
    </span>
  )
}

export default Button