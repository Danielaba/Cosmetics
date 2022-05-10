import React, { useState } from 'react';
import "./ItemCount.css"

function ItemCount({stock, inital, onAdd}) {
    const [count, setCount] = useState(inital);
    
    function aumentar() {
        if (count < stock ) {
            setCount(count + 1)
        }
    }

    function disminuir() {
        if (count > 0 ) {
            setCount(count - 1)
        }
    }

    return (
        <div className='contenCant'>
            <div className='cantidad'>
                <button onClick = { ()=> disminuir()} className="cont"> - </button>
                {/* <input readOnly value={count} /> */}
                 <h2>{ count }</h2>
                <button onClick = { ()=> aumentar()} className="cont"> + </button>
            </div>
            <button onClick={()=> (count <= stock) && onAdd(count)} className="btnAgregar">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;