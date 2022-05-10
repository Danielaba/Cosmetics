import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItenCount/ItemCount';
import "./ItemDetail.css"

function ItemDetail({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);

    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd)
    }

    return (
        <div className='centro'>
            <div className='conten-detalles'>
                <div>
                    <img src={item?.imageUrl} alt="" className='detalles-img' />
                </div>

                <div className='contenido-detalles'>
                    <h2 className='titulo'>{item?.title}</h2>
                    <p className='precio'>{item?.price}</p>
                    <div>
                        {cantidadDeProductos ?
                            <button className='btn-cant'>
                                <Link to="/cart" className='cant-products'>Terminar compra ({cantidadDeProductos} productos)</Link>
                            </button> :
                            <ItemCount inital={0} stock={item.stock} onAdd={addHandler} />
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;