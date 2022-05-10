import React, { useEffect, useState } from 'react';
import "./ItemDetailContainer.css"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';

function traerItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productos = [
            {
                id: 1,
                title: "Pestañina",
                price: "$15.000",
                stock: 5,
                imageUrl: "https://www.tiendadelabelleza.co/wp-content/uploads/2016/11/PESTANINA-VITAMINA-E-VOLUMEN-NEGRA-VITU.jpg"
            },
            {
                id: 2,
                title: "Base",
                price: "$40.000",
                stock: 5,
                imageUrl: "https://www.purpuremakeup.com/wp-content/uploads/2020/02/natural.jpg"
            },
    
            {
                id: 3,
                title: "Colorete",
                price: "$12.000",
                stock: 5,
                imageUrl: "https://lbel.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200084962_producto_rouge_lintense_labial_barra_rouge.jpg"
            }
        ];

        const producto = productos.filter(producto => producto.id === parseInt(id));
        console.log(producto);
        
        setTimeout(() => {
            resolve(producto[0]);
        }, 2000);
    })
    return myPromise;
}


function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        
        traerItem(id)
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