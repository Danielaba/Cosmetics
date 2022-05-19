import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
// import ItemCount from '../ItenCount/ItemCount';
import Item from "../../components/Item/Item";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import CartContext from '../../store/CartContext';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

function traerProductos(category) {
    // const myPromise = new Promise((resolve, reject) => {
    //     const productos = [
    //         {
    //             id: 1,
    //             title: "Pestañina",
    //             price: "15000",
    //             stock: 5,
    //             category: "cosmeticos",
    //             imageUrl: "https://www.tiendadelabelleza.co/wp-content/uploads/2016/11/PESTANINA-VITAMINA-E-VOLUMEN-NEGRA-VITU.jpg"
    //         },
    //         {
    //             id: 2,
    //             title: "Base",
    //             price: "40000",
    //             stock: 5,
    //             category: "cosmeticos",
    //             imageUrl: "https://www.purpuremakeup.com/wp-content/uploads/2020/02/natural.jpg"
    //         },

    //         {
    //             id: 3,
    //             title: "Colorete",
    //             price: "12000",
    //             stock: 5,
    //             category: "cosmeticos",
    //             imageUrl: "https://lbel.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200084962_producto_rouge_lintense_labial_barra_rouge.jpg"
    //         }
    //     ];

    //     const productoFiltrado = category ? productos.filter(p => p.category === category) : productos;
    //     setTimeout(() => {
    //         resolve(productoFiltrado);
    //     }, 2000);
    // })
    // return myPromise;

    const db = getFirestore();

    const itemCollection = collection(db, "items")

    const q = category && query(
        itemCollection,
        where("category", "==", category)
        // itemCollection,
        // where("category", "<", category),
        // limit(1)
    );
    return getDocs(q || itemCollection);
}

function ItemListContainer({ greeting }) {

    // --------- Funcion del boton agregar al carrito ---------
    //  function prueba() {
    //      console.log("Esta es una prueba")
    //  }

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        // const db = getFirestore();

        // const itemCollection = collection(db, "items")

        // const q = query(
        //     itemCollection,
        //     where("price", "<", 15000),
        //     limit(1)
        // );
        // getDocs(q)

        //     .then(snapshot => {
        //         console.log(snapshot.docs.map(doc => {
        //             return { ...doc.data(), id: doc.id }
        //         }));
        //     })
        //     .catch(
        //         err => console.log(err)
        //     );

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