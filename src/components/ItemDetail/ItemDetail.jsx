import React from 'react';
import ItemCount from '../ItenCount/ItemCount';
import "./ItemDetail.css"

function ItemDetail({ item }) {
    return (
        <div className='centro'>
            <div className='conten-detalles'>
                <div>
                    <img src={ item?.imageUrl } alt="" className='detalles-img' />
                </div>

                <div className='contenido-detalles'>
                    <h2 className='titulo'>{ item?.title }</h2>
                    <p className='precio'>{ item?.price }</p>
                    <div>
                        <ItemCount inital={0} stock={ item?.stock } onAdd={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;