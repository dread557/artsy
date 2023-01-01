import 'next/link'
import Link from 'next/link'
import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ScreenContext } from '../contexts/Screensize'

const Navbar = () => {
    const { setActiveMenu, activeMenu, setMobileMenu, mobileMenu } = useContext(ScreenContext)
    return (
        <div className='flex flex-col bg-white w-full h-full absolute top-0 left-0 right-0 p-[30px] pt-8'>
            <div className=' flex justify-between mb-12'>
                <Link className='font-bold text-[24px]' href='/' onClick={() => { setActiveMenu(!activeMenu); setMobileMenu(!mobileMenu) }}>ARTSY.</Link>
                <span className='text-2xl cursor-pointer' onClick={() => { setMobileMenu(!mobileMenu); setActiveMenu(false) }}><AiOutlineClose /></span>
            </div>
            <div className='flex flex-col gap-4 font-medium text-[24px]'>
                <Link href='/' onClick={() => { setMobileMenu(!mobileMenu); setActiveMenu(false) }}>Home</Link>
                <Link href='/marketplace' onClick={() => { setMobileMenu(!mobileMenu); setActiveMenu(false) }}>Marketplace</Link>
                <Link href='/auctions' onClick={() => { setMobileMenu(!mobileMenu); setActiveMenu(false) }}>Auctions</Link>
                <Link href='/drop' onClick={() => { setMobileMenu(!mobileMenu); setActiveMenu(false) }}>Drop</Link>
            </div>

        </div>
    )
}

export default Navbar