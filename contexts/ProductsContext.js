import React, { useState, useEffect, createContext } from 'react'
import { products } from '../data/products'

export const ProductContext = createContext()
const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState(null)
    const [cart, setCart] = useState([])
    const [favorite, setFavorite] = useState([])

    const toggleFavorite = (id) => {
        let product = products.find(item => item.id == id)
        setFavorite(prevItem => {
            // Filter out item when in favorite already 
            if (favorite.some(item => item.id == id)) {
                return favorite.filter(item => item.id != id)
            } else {
                // Otherwise add it to cart 
                return [...prevItem, product]
            }
        })
    }

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
        <ProductContext.Provider value={{ productList, cart, setCart, toggleFavorite, favorite }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider