import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartBubble from '../CartBubble/CartBubble';
import "./CartItem.css"


function CartItem({ item }) {
    const cartCtx = useContext(CartContext);
    return (
        <div className='conten-cart'>
            <div className='cart'>
                <img src={item?.imageUrl} alt="" className='imagen' />

                <div className='cart-detalles'>
                    <p className='producto'>{item?.title}</p>
                    <p>Precio: ${item?.price}</p>
                    <div>
                        <p className='cant'>Cantidad: <CartBubble>{item?.quantity}</CartBubble></p>
                    </div>

                </div>

            </div>
            <div className='elimimar'>
                <CartBubble isButton handlerBubble={() => cartCtx.removeItem(item.id)}>Eliminar producto del carrito</CartBubble>
            </div>
            {/* <div>
                <CartBubble>{ item?.quantity }</CartBubble>
            </div> */}
        </div>
    );
}

export default CartItem;