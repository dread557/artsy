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

const Header = () => {
    const { screenSize, activeMenu, setActiveMenu, mobileMenu, setMobileMenu } = useContext(ScreenContext)
    return (
        <div className='flex justify-between items-center pt-8 md:pt-[50px] pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
            <span className='text-2xl lg:hidden cursor-pointer' onClick={() => { setActiveMenu(!activeMenu); setMobileMenu(!mobileMenu) }}> <AiOutlineMenu /></span>
            {(mobileMenu && screenSize <= 968) ? (<NavMenu />) : null}
            <Link href='/' className='text-[24px] md:text-[2rem] font-bold leading-[51.5px] md:leading-[90px] font-stix'>ARTSY.</Link>
            {activeMenu && <Navbar />}
            <div className='flex gap-[11px]'>
                <BiSearch className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />
                <BsCart3 className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />
                {screenSize >= 968 ? (<IoMdNotificationsOutline className='w-[28px] h-[28px] text-[#333333] cursor-pointer' />) : null}
            </div>

        </div>
    )
}

export default Header