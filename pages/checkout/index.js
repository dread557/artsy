import React, { useContext } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/ProductsContext'
import { useRouter } from 'next/router'
import CheckoutNav from '../../components/CheckoutNav'
import CartItems from '../../components/CartItems'

const Cart = () => {
    const { cart } = useContext(ProductContext)
    const router = useRouter()
    let totalPrice = 0
    let shippingFee = 0
    let cost = cart.map((x) => {
        totalPrice += x.price * x.quantity
        shippingFee += (0.05 * totalPrice)
        return x
    })
    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link className='text-[#292929] whitespace-nowrap text-xs' href='#'>Cart</Link>
            </span>
            <CheckoutNav />
            {cart.length === 0 ? (
                <div className='mt-5 flex gap-10 flex-col h-[40vh] justify-center'>
                    <p className='text-2xl font-bold text-center'>Cart is empty :/</p>
                    <Link className='text-[#006CA2] underline self-center font-medium text-[18px] md:text-[28px]' href='/marketplace'>Go back to marketplace</Link>
                </div>
            ) : (
                <>
                    <CartItems />
                    <div className='flex fixed md:static bottom-0 right-0 left-0 h-[420px] md:h-auto p-6 bg-white shadow-[0px_4px_48px_rgba(0,0,0,0.12)] md:shadow-none flex-col-reverse lg:flex-row md:gap-[43px] lg:gap-[100px] justify-between mt-[60px] pt-[60px] md:border-t-[0.3px] border-[#747474]'>
                        <div className='flex flex-col'>
                            <button className='w-[278px] md:w-[350px] xl:w-[534px] text-[17.51px] md:text-[32px] self-center lg:self-start h-[59.01px] md:h-[107px] mb-5 md:mb-10 bg-[#3341C1] text-white' onClick={() => router.push('/checkout/payment')}>
                                Proceed to checkout
                            </button>
                            <Link className='text-[#006CA2] underline self-center font-medium text-[18px] md:text-[28px]' href='/marketplace'>Continue shopping</Link>
                        </div>
                        <div className='flex flex-col lg:w-[50%] gap-[21px] md:gap-[35px]'>
                            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888] pt-5 lg:pt-0'>Products in cart : <p>{cart.length} item(s)</p></span>
                            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888]'>Shipping : <p>${shippingFee.toFixed(2)}</p></span>
                            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888]'>Total : <p>${totalPrice.toFixed(2)}</p></span>
                            <span className='flex justify-between text-[20px] md:text-[28px] text-[#888] border-t-[.5px] border-[#616161] border-dashed'>Grand total : <p>${(totalPrice + shippingFee).toFixed(2)}</p></span>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default Cart