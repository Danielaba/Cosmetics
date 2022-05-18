import React, { useContext } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import "./Cart.css"

function Cart() {
    const cartCtx = useContext(CartContext);
    return (
        <div className='conten-carrito'>
            <h2 className='titulo'>Carrito de compras</h2>
            {cartCtx.products.map(p => <CartItem item={p} key={p.id} />)}
            {cartCtx.products.length !== 0 ?
            <div>
                <p>Precio total: ${cartCtx.getTotalPrice()}</p>
                <button className='btn'>Terminar compra</button>
            </div>:
            <>
            <h2>No hay productos en el carrito</h2>
            <button className='btn'>
                <Link to='/' className='btn'>Ir al inicio</Link>
            </button>
            </>
            }

        </div>
    );
}

export default Cart;