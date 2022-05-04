import React, { useEffect, useState } from 'react';
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

function traerProducto() {
    const myPromise = new Promise((resolve, reject) => {
        const producto = {
                id: 1,
                title: "Pestañina",
                price: "$15.000",
                Stock: 5,
                imageUrl: "https://www.tiendadelabelleza.co/wp-content/uploads/2016/11/PESTANINA-VITAMINA-E-VOLUMEN-NEGRA-VITU.jpg"
            }
        setTimeout(() => {
            resolve(producto);
        }, 2000);
    })
    return myPromise;
}


function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        traerProducto()
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;