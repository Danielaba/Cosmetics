import React from 'react';
import "./ItemList.css"
import Item from '../Item/Item';

function ItemList({ items }) {
    return (
        <div>
            <div className='tarjetas'>
                    {items.map(item => <Item item={item} key={item.id} />)}
                </div>
        </div>
    );
}

export default ItemList;