import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./navbar.css"
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs, getFirestore } from "firebase/firestore"

function getCategories () {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    return  getDocs (itemCollection);
}

function NavBar(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then(snapshot => {
            const categories = snapshot.docs.map(doc => doc.data().category);
            setCategories = (categories);
        })
    }, []);

    return (
        <div className='nav'>
            <Link to="/" className='logo'><h1>Cosmetics</h1></Link> 
            <ul className='menu'>
                <li><NavLink to="/categoria/ojos" className={nav => nav.isActive ? "nav-active": ""}>Ojos</NavLink></li>
                <li><NavLink to="/categoria/piel" className={nav => nav.isActive ? "nav-active": ""}>Piel</NavLink></li>
                <li><NavLink to="/categoria/labios" className={nav => nav.isActive ? "nav-active": ""}>Labios</NavLink></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;