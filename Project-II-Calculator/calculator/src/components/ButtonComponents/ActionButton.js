import React from 'react';
import './Button.css';

function ActionButton(prop){
    return (
        <button id = "action-button">{prop.name}</button>
    )
}

export default ActionButton;