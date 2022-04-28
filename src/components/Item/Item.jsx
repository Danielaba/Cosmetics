import React from 'react';
import "./Item.css"

function Item({item}) {
    return (
        <div className='contenTarjeta'>
            <h2>{ item?.title }</h2>
            <div className='caja-img'>
                <img src={ item?.imageUrl } alt="" className='img' />
            </div>
            <p>{ item?.price }</p>
        </div>
    );
}

export default Item;