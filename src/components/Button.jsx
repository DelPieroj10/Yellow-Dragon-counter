import React from 'react';
import './Style sheet/style-button.css';

function Button({ text, isClickButton, clickManager }) {
    return (
        <button
            className={isClickButton ? 'button-click' : 'button-restart'}
            onClick={clickManager}>
            {text}    
        </button>
    );
}

export default Button;