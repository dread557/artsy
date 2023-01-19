import React, { useContext } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/ProductsContext'
import CheckoutNav from '../../components/CheckoutNav'
import CartItems from '../../components/CartItems'
import ShippingForm from '../../components/ShippingForm'

const Shipping = () => {
    const { cart } = useContext(ProductContext)
    console.log(cart)
    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link href='/checkout'>Cart/</Link>
                <Link href='checkout/shipping' className='text-[#292929] whitespace-nowrap text-xs'>Shipping</Link>
            </span>
            <CheckoutNav />
            <section className='flex justify-between'>
                <ShippingForm />
                <div className='hidden md:block'>
                  <CartItems />  
                </div>   
            </section>
        </div>
    )
}

export default Shipping