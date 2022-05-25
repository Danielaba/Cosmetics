import React, { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';
import db from "../../services/firebase"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"

function Checkout() {
    const productList =useContext(CartContext);
    const { getTotalPrice, products } = productList
    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Telefono: "",
        Email: ""
    })

    const { Nombre, Telefono, Email } = buyer;

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async (data) => {
        setLoad(true)
        try {
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            console.log("order", order)
            console.log("order", order.id)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        console.log("date", date)
        console.log("buyer", buyer)
        const items = products.map(e => {return {id:e.id,title:e.title,price:e.price,quantity:e.quantity}})
        console.log("items", items)
        const total = getTotalPrice()
        console.log("total", total)
        const data = {buyer,items,date,total}
        console.log("Data", data)
        generateOrder(data)
    }
    return (
        <div>
            <h1>Finalizar Compra</h1>
            {/* { load? <spinner />
            : */}
            <div className='conten-form'>
                <h3>Completar Datos: </h3>
                <form onSubmit={handleSubmit} className="formulario">
                    <input className='input' type="text" name="Nombre" placeholder='Nombre' value={Nombre} onChange={handleInputChange} required />
                    <input className='input' type="number" name="Telefono" placeholder='Telefono' value={Telefono} onChange={handleInputChange} required />
                    <input className='input' type="email" name="Email" placeholder='Email' value={Email} onChange={handleInputChange} required />
                    <input type="submit" value="Finalizar compra" className='btn-succes' />
                </form>

            </div>
            {/* } */}

        </div>
    );
}

export default Checkout;