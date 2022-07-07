import React from 'react'
import "./ButtonStyle.css"

const Button = ({prompt, variation, action}) => {
  return ( 
    <button className={variation} onClick={action} >{prompt}</button>
  )
}
export default Button