import React, { useContext } from 'react'
import Link from 'next/link'
import { ProductContext } from '../../contexts/ProductsContext'
import bgImg from '../../public/bg-large.svg'
import Image from 'next/image'
import celeImg from '../../public/cele.png'
import coneImg from '../../public/cone.svg'

const Payment = () => {
    const { cart } = useContext(ProductContext)
    return (
        <div className='flex flex-col justify-center items-center pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
            <div className='hidden md:block absolute left-0 top-0'><Image src={bgImg} alt='circles' /> </div>
            <div className='w-[78px] h-[80px] bg-[#006CA2] blur-2xl rounded-full absolute left-0 top-[14%] md:hidden'></div>
            <div className='w-[90px] h-[92px] bg-[#9B62EC] blur-[30px] rounded-full absolute right-[30%] top-[11%] md:hidden'></div>
            <div className='w-[129px] h-[112px] bg-[#E27625] blur-[35px] rounded-full absolute right-0 top-[39%] md:hidden'></div>
            <Image className='mt-[58px] md:mt-0 relative z-10' src={celeImg} alt='success' />
            <p className='text-center font-satoshi font-medium text-lg md:text-4xl mt-16 md:mt-11'>Hey Celestina, thank you for your purchase. </p>
            <div className='flex items-center relative'>
                <p className='text-center font-satoshi md:text-3xl my-10 text-[#616161]'>You are amazing. Cheers to being
                    <span className=' ml-3 bg-gradient-to-b from-[#006CA2] to-[#C056097D] text-transparent bg-clip-text'>ARTSY!</span>
                </p>
                <Image className='absolute right-[-105px] bottom-[33%] hidden md:block' src={coneImg} alt='cone' /></div>
        </div>
    )
}

export default Payment