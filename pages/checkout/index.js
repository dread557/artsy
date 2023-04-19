import React, { useContext } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/ProductsContext'
import { useRouter } from 'next/router'
import CheckoutNav from '../../components/CheckoutNav'
import CartItems from '../../components/CartItems'
import ItemsCost from '../../components/ItemsCost'

const Cart = () => {
    const { cart } = useContext(ProductContext)
    const router = useRouter()
    let amount = 0
    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] xl:pl-[120px] xl:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium md:text-2xl mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link className='text-[#292929] whitespace-nowrap text-xs' href='#'>Cart</Link>
            </span>
            {cart.length === 0 ? (
                <div className='mt-5 flex gap-10 flex-col h-[40vh] justify-center'>
                    <p className='text-2xl font-bold text-center'>Cart is empty :/</p>
                    <Link className='text-[#006CA2] underline self-center font-medium text-[18px] md:text-[28px]' href='/marketplace'>Go back to marketplace</Link>
                </div>
            ) : (
                <>
                    <CheckoutNav />
                    <CartItems />
                    <div className='flex fixed md:static bottom-0 right-0 left-0 h-[363px] md:h-auto p-6 bg-white shadow-[0px_4px_48px_rgba(0,0,0,0.12)] md:shadow-none flex-col-reverse lg:flex-row md:gap-[43px] lg:gap-[100px] justify-between mt-[60px] pt-[60px] md:border-t-[0.3px] border-[#747474]'>
                        <div className='flex flex-col'>
                            <button onClick={() => router.push('/checkout/shipping')} className='w-[278px] hover:opacity-80 rounded-[4px] md:w-[350px] xl:w-[534px] text-[17.51px] md:text-[32px] self-center lg:self-start h-[59.01px] md:h-[107px] mb-5 md:mb-10 bg-[#3341C1] text-white' >
                                Proceed to checkout
                            </button>
                            <Link className='text-[#006CA2] underline self-center font-medium text-[18px] md:text-[28px]' href='/marketplace'>Continue shopping</Link>
                        </div>
                        <ItemsCost amount={amount} />
                    </div>
                </>
            )}

        </div>
    )
}

export default Cart