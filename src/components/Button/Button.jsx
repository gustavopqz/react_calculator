import React from "react";
import './Button.css'

const Button = (props) => 
    <button className="button">{props.label}</button>

export default Button