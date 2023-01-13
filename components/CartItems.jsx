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
    <div className='mt-[60px]'>
      {cart.map((item, index) => (
        <div className='flex justify-between' key={index}>
          <div className='flex gap-10'>
            <Image className='h-[196px] object-cover rounded' src={item.image} alt={item.name} />
            <div className='flex flex-col gap-5'>
              <h4 className='font-medium text-2xl text-[#292929]'>{item.name}</h4>
              <p className='text-2xl text-[#888] '>{item.creator}</p>
              <p className='text-xl text-[#888]'>Size: 200 ft</p>
              <div className='flex md:text-[32px] gap-5 font-medium'>
                <button className='' onClick={() => reduceQty(item.id)}>-</button>
                <p className=''>{item.quantity}</p>
                <button className='' onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <button onClick={() => removeItem(item.id)}><MdOutlineCancel className='w-10 h-10' /></button>
            <span className='font-cardo text-4xl'>${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems