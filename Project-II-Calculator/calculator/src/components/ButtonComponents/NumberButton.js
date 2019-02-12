import React from 'react';
import './Button.css';

function NumberButton(props){
return (
        <button id = "numberButton">{props.number}</button>
)
} 

export default NumberButton;