import React, { useContext, useState } from 'react'
import { ProductContext } from '../contexts/productContext'
import Image from 'next/image'
import { MdOutlineCancel } from 'react-icons/md'

const CartItems = () => {
  const { cart, setCart } = useContext(ProductContext)

  const increaseQty = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item, quantity: item.quantity += 1
          }
        } else return item
      })
    )
  }

  const reduceQty = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return {
              ...item, quantity: item.quantity -= 1
            }
          } else {
            return item
          }

        } else {
          return item
        }
      })
    )
  }

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item.id != id)
    )
  }
  return (
    <div className='mb-[400px] md:mb-0'>
      {cart.map((item, index) => (
        <div className='flex gap-[52px] justify-between md:pt-[60px] mt-[60px] md:border-t-[0.3px] border-[#747474]' key={index}>
          <div className='flex gap-5 md:gap-10'>
            <Image className='w-[125px] md:w-auto h-auto md:h-[196px] object-cover rounded' src={item.image} alt={item.name} />
            <div className='flex flex-col gap-5'>
              <p className='font-cardo text-[#888] italic md:hidden'>{item.category}</p>
              <h4 className='font-bold text-[18px] md:text-2xl text-[#292929]'>{item.name}</h4>
              <p className='text-2xl hidden md:block text-[#888] '>{item.creator}</p>
              <p className='text-xl hidden md:block text-[#888]'>Size: 200 ft</p>
              <div className='flex justify-center md:justify-between items-center p-2 h-8 md:h-auto text-xl md:text-[32px] gap-5 font-medium md:border-none border border-black rounded-[10px]'>
                <button className='border-r md:border-none border-[#888] pr-[10px]' onClick={() => reduceQty(item.id)}>-</button>
                <p className=''>{item.quantity}</p>
                <button className='border-l md:border-none border-[#888] pl-[10px]' onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <button onClick={() => removeItem(item.id)}><MdOutlineCancel className='w-10 h-10 ' /></button>
            <span className='font-cardo text-2xl md:text-4xl'>${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems