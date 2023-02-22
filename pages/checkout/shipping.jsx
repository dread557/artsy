import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/ProductsContext'
import CheckoutNav from '../../components/CheckoutNav'
import CartItems from '../../components/CartItems'
import ShippingForm from '../../components/ShippingForm'
import ItemsCost from '../../components/ItemsCost'

const Shipping = () => {
    const { cart, totalPrice, shippingFee, amount } = useContext(ProductContext)
    const [email, setEmail] = useState('')

    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link href='/checkout'>Cart/</Link>
                <Link href='checkout/shipping' className='text-[#292929] whitespace-nowrap text-xs'>Shipping</Link>
            </span>
            <CheckoutNav />
            <section className='flex justify-between gap-[105px]'>
                <ShippingForm amount={amount} email={email} setEmail={setEmail} />
                <div className='hidden md:block'>
                    <CartItems />
                    {cart.length === 0 ? null : (
                        <>
                            <hr className='my-[50px]' />
                            <ItemsCost amount={amount} totalPrice={totalPrice} shippingFee={shippingFee} />
                        </>
                    )}
                </div>
            </section>
            <Link className='text-[#006CA2] underline flex justify-center mb-14 text-center font-medium text-[18px] lg:hidden' href='/checkout'>Go back to cart </Link>
        </div>
    )
}

export default Shipping