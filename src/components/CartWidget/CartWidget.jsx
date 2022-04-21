import React from 'react';
import Carrito from "../../assets/img/Carrito.png"
import "./CartWidget.css"
function CartWidget(props) {
    return (
        <div>
            <img src={Carrito} alt="" className='carrito' />
        </div>
    );
}

export default CartWidget;