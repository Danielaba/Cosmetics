import React from 'react';
import "./ItemListContainer.css"
import ItemCount from '../ItenCount/ItemCount';

function ItemListContainer({greeting}) {
    function prueba() {
        console.log("Esta es una prueba")
    }
    return (
        <div className='componentContainer'>
            <p>{greeting}</p>
            <ItemCount inital={0} stock={5} onAdd={prueba} />
        </div>
    );
}

export default ItemListContainer;