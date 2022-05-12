import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItenCount/ItemCount';
import "./ItemDetail.css"
import CartContext from '../../store/CartContext';

function ItemDetail({ item }) {
    // const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    const CartCtx = useContext(CartContext);

    // useEffect(() => {
    //     console.log(CartCtx);
    // }, [])

    function addHandler(quantityToAdd) {
        // setCantidadDeProductos(quantityToAdd)
        CartCtx.addItem({ quantity: quantityToAdd, ...item });

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
                    <ItemCount inital={0} stock={item.stock} onAdd={addHandler} />
                    <div>
                        
                        <div className='conten-botones'>
                            <button onClick={() => console.log(CartCtx.products)} className="botones">Imprimir carrito</button>
                            <button onClick={() => CartCtx.removeItem(item.id)} className="botones">Quitar producto</button>
                            <button onClick={() => CartCtx.clear()} className="botones">Limpiar Carrito</button>
                            <button onClick={() => console.log(CartCtx.isInCart(item.id))} className="botones">Existe en el carrito</button>
                            <button onClick={() => console.log(CartCtx.getCartQuantity())} className="botones">Cantidad de productos</button>

                        </div>


                        {CartCtx.products.length &&
                            <button className='btn-cant' onClick={() => console.log(CartCtx)}>
                                <Link to="/cart" className='cant-products'>Terminar compra ({CartCtx.getCartQuantity()} productos)</Link>
                            </button>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;