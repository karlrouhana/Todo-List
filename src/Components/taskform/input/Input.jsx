import React from 'react'
import './input.css';

const Input = (props) => {
  return (
    <div className="input">
      <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} required/>
    </div>
  )
}

export default Input
