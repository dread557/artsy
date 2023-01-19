import React from 'react'
import Input from './Input'

const ShippingForm = () => {
    return (
        <form className='flex flex-col gap-[60px]' id='shippingForm'>
            <div>
                <label className='flex flex-col gap-[17px] text-[#888] text-[26px]'>
                    Your Email
                    <Input type={'email'} name={'email'} placeholder={'aanuoluwateenah@gmail.com'} />
                </label>
                <div className='flex gap-[13px] mt-[31px]'>
                    <input className='w-[26px] h-[26px]' type='checkbox' />
                    <p className='text-[#747474] text-xl'>Get updates about new drops & exclusive offers</p>
                </div>   
            </div>
            <label className='flex flex-col gap-[17px] text-[#888] text-[26px]'>
                Your full name
                <Input type={'text'} name={'full name'} placeholder={'Anuoluwapo Bamisaye'} />
            </label>
            <label className='flex flex-col gap-[17px] text-[#888] text-[26px]'>
                Choose a wallet
                <select name='wallets' id='wallets' form='shippingFom' className='h-[76px] w-[610px] px-[30px] rounded-[10px] text-[#747474] bg-[#F2F2F2] border-[.5px] border-[#747474]'>
                    <option value='Metamask'>Metamask</option>
                    <option value='Binance'>Binance</option>
                    <option value='Opensea'>Opensea</option>
                </select>                
            </label>

        </form>
    )
}

export default ShippingForm