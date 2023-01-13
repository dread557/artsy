import React, { useState, useEffect, createContext } from 'react'
import { products } from '../data/products'

export const ProductContext = createContext()
const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState(null)
    const [cart, setCart] = useState([])
    const [favorite, setFavorite] = useState([])

    // const toggleFavorite = (id) => {
    //     const product = productList.find()
    // }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        if (typeof window !== undefined) {
            localStorage.getItem('cart') ? localStorage.getItem('cart') : []
        }
    })

    useEffect(() => {
        setProductList(products)
    }, [])

    return (
        <ProductContext.Provider value={{ productList, cart, setCart, favorite, setFavorite }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider