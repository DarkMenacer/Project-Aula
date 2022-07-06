import React from 'react'
import "./Button_Style.css"

const Button = ({prompt, type, action}) => {
  return ( 
    <button className={type} onClick={action} >{prompt}</button>
  )
}
export default Button