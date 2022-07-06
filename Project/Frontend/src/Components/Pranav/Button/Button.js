import React from 'react'
import "./Button_Style.css"

const Button = ({prompt, variation, action}) => {
  return ( 
    <button className={variation} onClick={action} >{prompt}</button>
  )
}
export default Button