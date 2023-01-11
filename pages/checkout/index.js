import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/productContext'

const Cart = () => {
    const { cart } = useContext(ProductContext)
    console.log(cart);
    return (
        <div>
            {cart.map((item) => (
                <h1 key={item.id}>{item.name}</h1>
            ))}
        </div>
    )
}

export default Cart