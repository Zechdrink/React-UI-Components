import React from 'react';
import './Button.css';

function ActionButton(props){
    return (
        <button className =  {`action-button ${props.color}`}>{props.name}</button>
    )
}

export default ActionButton;