import React from 'react';
import { Link } from 'react-router-dom';
import Carrito from "../../assets/img/Carrito.png"
import "./CartWidget.css"


function CartWidget() {
    return (
        <div>
            <Link to='/cart'> <img src={Carrito} alt="" className='carrito' /></Link>
        </div>
    );
}

export default CartWidget;