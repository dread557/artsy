import Link from 'next/link'
import { useRouter } from 'next/router'

const CheckoutNav = () => {
    const router = useRouter()
    const links = [
        { name: 'Shopping cart', link: '/checkout' },
        { name: 'Shipping details', link: '/checkout/shipping' },
        { name: 'Payment details', link: '/checkout/payment' }
    ]
    return (
        <>
            <div className='flex md:hidden h-[50px] max-w-[313px] mx-auto  bg-[#3A3A3A] mt-[36px] gap-[55px] justify-around items-center rounded-[40px]'>
                <button className='bg-white h-[38px] w-[110px] rounded-[27px] text-black'>Shop</button>
                <button className='text-white'>Scheduled</button>
            </div>
            <div className='hidden md:flex border-b border-[#2F4333] gap-[88px] w-fit mx-auto'>
                {
                    links.map((link, index) => {
                        const isActive = router.asPath === link.link;
                        return (
                            <span className={isActive ? 'text-2xl font-medium border-b text-[#292929] border-[#2F4333] pb-3' : 'text-[#888] text-2xl pb-3'}
                                // href={link.link}
                                key={index}
                            >
                                {link.name}</span>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CheckoutNav