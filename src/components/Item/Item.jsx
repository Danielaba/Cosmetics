import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css"

function Item({item}) {
    return (
        <div className='contenTarjeta'>
            <h2>{ item?.title }</h2>
            <div className='caja-img'>
                <img src={ item?.imageUrl } alt="Imagen" className='img' />
            </div>
            <p>{ item?.price }</p>
            <Link to={"/item/" + item?.id} className="boton">Ver Detalle</Link>
        </div>
    );
}

export default Item;