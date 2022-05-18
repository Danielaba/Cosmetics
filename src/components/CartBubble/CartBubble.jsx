import React from 'react';

function CartBubble({ children, isButton, handlerBubble }) {
    return (
        <div className={`bubble ${isButton ? 'bubble-button' : ''}`} onClick={() => isButton && handlerBubble()}>
            { children }
        </div>
    );
}

export default CartBubble;