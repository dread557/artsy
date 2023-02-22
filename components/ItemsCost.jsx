import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsContext'

const ItemsCost = () => {
    const { cart, totalPrice, shippingFee, amount } = useContext(ProductContext)
    return (
        <div className='flex flex-col gap-[21px] md:gap-[35px]'>
            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888] pt-5 lg:pt-0'>Products in cart : {" "} <p> {cart.length} item(s)</p></span>
            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888]'>Shipping : <p>${shippingFee.toFixed(2)}</p></span>
            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888]'>Total : <p>${totalPrice.toFixed(2)}</p></span>
            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888] border-t-[.5px] border-[#616161] border-dashed'>Grand total : <p>${amount}</p></span>
        </div>
    )
}

export default ItemsCost