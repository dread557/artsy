import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { ScreenContext } from '../contexts/Screensize'
import Navbar from './Navbar'
import NavMenu from './NavMenu'
import Link from 'next/link'
import { ProductContext } from '../contexts/ProductsContext'

const Header = () => {
    const { cart } = useContext(ProductContext)
    const { screenSize, activeMenu, setActiveMenu, mobileMenu, setMobileMenu } = useContext(ScreenContext)
    return (
        <div className='flex justify-between items-center pt-8 md:pt-[50px] pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]  max-w-[1440px] m-auto'>
            <span className='text-2xl lg:hidden cursor-pointer' onClick={() => { setActiveMenu(!activeMenu); setMobileMenu(!mobileMenu) }}> <AiOutlineMenu /></span>
            {(mobileMenu && screenSize <= 968) ? (<NavMenu />) : null}
            <Link href='/' className='text-[24px] md:text-[2rem] font-bold leading-[51.5px] md:leading-[90px] font-stix'>ARTSY.</Link>
            {activeMenu && <Navbar />}
            <div className='flex gap-[11px]'>
                <BiSearch className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />
                <Link href={'/checkout'} className='relative'>
                    <BsCart3 className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />
                    <span
                        className={cart.length ? 'absolute w-2 h-2 rounded-full bg-red-600 -top-[6px] right-0' : 'hidden'}></span>
                </Link>
                {screenSize >= 968 ? (<IoMdNotificationsOutline className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />) : null}
            </div>

        </div>
    )
}

export default Header