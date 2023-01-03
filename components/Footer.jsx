import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Footer = () => {
    return (
        <>
            <div className='hidden md:flex flex-col md:flex-row items-center justify-between pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px] mt-8 mb-8 md:mt-[60px]'>
                <Link href='/' className='text-[24px] md:text-[2rem] font-bold leading-[51.5px] md:leading-[90px] font-stix'>ARTSY.</Link>
                <ul className='md:text-2xl '>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/'><li>Marketplace</li></Link>
                    <Link href='/'><li>Auctions</li></Link>
                    <Link href='/'><li>Drop</li></Link>
                </ul>
                <ul className='md:text-2xl '>
                    <Link href='/'><li>Blogs</li></Link>
                    <Link href='/'><li>Wallets</li></Link>
                    <Link href='/'><li>Rates </li></Link>
                    <Link href='/'><li>High bids</li></Link>
                </ul>
            </div>
            <div className='flex flex-col md:hidden pl-[30px] pr-[30px] mb-6'>
                <span className='flex gap-2 items-center'>
                    <AiOutlineMail />
                    <p>artsystudios@gmail.com</p>
                </span>
                <span className='flex gap-2 items-center'>
                    <GoLocation />
                    <p>Lagos, Nigeria.</p>
                </span>
            </div>
        </>
    )
}

export default Footer