import React from "react";
import './Button.css'

const Button = (props) => 
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>

export default Button

// Another way to do
// const Button = (props) => {
//     let classes = 'button '
//     classes += props.operation ? 'operation' : ''
//     classes += props.double ? 'double' : ''
//     classes += props.triple ? 'triple' : ''
// 
//     return (
//         <button className={classes}>{props.label}</button>
//     )
// }
