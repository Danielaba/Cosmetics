import React from 'react';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div className='nav'>
            <h1>Cosmetics</h1>
            <ul className='menu'>
                <li><a href="">Home</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Categoria</a></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;