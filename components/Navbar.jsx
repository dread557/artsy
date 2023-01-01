import 'next/link'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ScreenContext } from '../contexts/Screensize'
import { useRouter } from 'next/router';

const Navbar = () => {
    const { setActiveMenu } = useContext(ScreenContext)
    const router = useRouter();
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Marketplace', link: '/marketplace' },
        { name: 'Auctions', link: '/auctions' },
        { name: 'Drop', link: '/drop' }
    ]
    return (
        <div className='flex md:gap-4 lg:gap-[47px] font-satoshi'>
            {links.map((link, index) => {
                const isActive = router.asPath === link.link;
                return (
                    <Link className={
                        isActive ?
                            'border-b-2 text-[24px] transition ease-out duration-300 border-[#292929] font-medium'
                            : 'border-b-2 border-transparent text-[24px] transition ease-out duration-300 hover:border-b-2 hover:border-[#292929] hover:font-medium'}
                        href={link.link}
                        key={index}
                    >
                        {link.name}</Link>
                )
            })}
        </div>
    )
}

export default Navbar