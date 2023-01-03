import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import search from '/public/search.svg'
import fil from '/public/fil.svg'
import Image from 'next/image'

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const submit = (e) => {

        setSearchTerm()
    }
    return (
        <div className='pl-[30px] mt-28 pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
            <div className='flex gap-[72px] items-center'>
                <form className='hidden lg:flex'>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={submit}
                        placeholder='Search'
                        style={{ backgroundImage: `url(${search.src})` }}
                        className='bg-no-repeat	bg-[#F4F2F2] bg-left pl-[40px] h-[60px] w-[215px] rounded-[15px] text-2xl'
                    />
                </form>
                <div className='flex pl-[30px] pr-[30px] justify-between w-full shadow-[4px_4px_64px_rgba(0,0,0,0.1)] h-[91px] items-center rounded-[15px]'>
                    <p className='text-2xl text-black hidden md:flex'>See 1-6 of 15 results</p>
                    <button className='text-2xl justify-center rounded-md flex items-center border border-gray-700 w-[191px] h-[58px]'>
                        Sort by
                        <RiArrowDropDownLine className='w-[36px] h-[29px]' />
                    </button>
                </div>
            </div>
            <div className=' flex items-center gap-[57px] mt-[89px]'>
                <div className=''>
                    <span className='hidden md:flex items-center justify-between gap-[14.67] border-b-4 border-[#AFB091] pb-2 pr-16'>
                        <Image className='w-[53.33px] h-[59.76px]' src={fil} alt='filter' />
                        <span className='text-[32px] font-medium'>Filter</span>
                    </span>
                </div>
                <div className=''>
                    LOad of crap..
                </div>
            </div>
        </div>
    )
}

export default Marketplace