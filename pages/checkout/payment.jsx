import React, { useContext } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/productContext'
import CheckoutNav from '../../components/CheckoutNav'

const Payment = () => {
    const { cart } = useContext(ProductContext)
    console.log(cart);
    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link href='/checkout'>Cart/ </Link>
                <Link href='/checkout/payment' className='text-[#292929] whitespace-nowrap text-xs'>Payment</Link>
            </span>
            <CheckoutNav />
        </div>
    )
}

export default Payment