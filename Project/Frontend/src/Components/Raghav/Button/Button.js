import React from 'react'
import "./ButtonStyle.css"

const Button = ({prompt = "Default", variation = "default", action = "#"}) => {
  return ( 
    <button className={variation} onClick={action} >{prompt}</button>
  )
}
export default Button