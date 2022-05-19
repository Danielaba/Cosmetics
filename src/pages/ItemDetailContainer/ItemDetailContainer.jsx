import React, { useContext, useEffect, useState } from 'react';
import "./ItemDetailContainer.css"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore"
function traerItem(id) {
    const db = getFirestore();

    const ItemRef = doc(db, "items", id);

    return getDoc(ItemRef);
}


function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        
        traerItem(id)
        .then(snapshot => {
            setItem({...snapshot.data(), id: snapshot.id});
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