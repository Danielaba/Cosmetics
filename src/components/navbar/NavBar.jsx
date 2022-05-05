import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div className='nav'>
            <h1>Cosmetics</h1>
            <ul className='menu'>
                <li><NavLink to="/categoria/inicio" className={nav => nav.isActive ? "nav-active": ""}>Inicio</NavLink></li>
                <li><NavLink to="/categoria/cosmeticos" className={nav => nav.isActive ? "nav-active": ""}>Productos</NavLink></li>
                <li><NavLink to="/categoria/category" className={nav => nav.isActive ? "nav-active": ""}>Categoria</NavLink></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;