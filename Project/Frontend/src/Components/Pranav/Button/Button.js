import React from 'react'
import "./Button_Style.css"

const Button = ({prompt, type}) => {
  return ( 
    <button className={type}>{prompt}</button>
  )
}
export default Button