import React from 'react'
import "./ButtonStyle.css"

const Button = ({prompt, variation, action, type="button"}) => {
  return ( 
    <button className={variation} onClick={action} type={type}>{prompt}</button>
  )
}
export default Button