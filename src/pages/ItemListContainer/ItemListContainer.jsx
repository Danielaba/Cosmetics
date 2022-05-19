import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
// import ItemCount from '../ItenCount/ItemCount';
import Item from "../../components/Item/Item";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function traerProductos(category) {

    const db = getFirestore();

    const itemCollection = collection(db, "items")

    const q = category && query(
        itemCollection,
        where("category", "==", category)
    );
    return getDocs(q || itemCollection);
}

function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        traerProductos(categoryId)

        .then( snapshot => {
            setProducts(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }));
        })
        .catch(err => {
            console.log(err);
        });

    }, [categoryId])

    return (
        <div className='componentContainer'>

            {/* --------- Boton Carrito de compras --------- */}
            {/* <p>{greeting}</p>
                <ItemCount inital={0} stock={5} onAdd={prueba} />  */}
            {/* <div className='tarjetas'>
                    {itemList.map((item, i) => <Item item={item} key={item.id} />)}
                </div>     */}

            <ItemList items={products} />
        </div>
    );
}

export default ItemListContainer;