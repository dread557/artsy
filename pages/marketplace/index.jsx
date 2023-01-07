import React, { useState, useRef } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import search from '/public/search.svg'
import fil from '/public/fil.svg'
import Image from 'next/image'
import Link from 'next/link'
import { artists, categories, products } from '../../data/products'

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState(true)
    const [price, setPrice] = useState(true)
    const [artist, setArtist] = useState(true)


    // const [selectedValues, setSelectedValues] = useState([])

    const submit = (e) => {

        setSearchTerm()
    }

    // const checkSubmit = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const values = []
    //     for (const [key, value] of formData.entries()) {
    //         values.push(value)
    //     }
    //     setSelectedValues(values)
    // }

    // const handleChange = () => {
    //     // const form = document.querySelector('form')
    //     checkForm.current.dispatchEvent(new Event('submit', { cancelable: true }))
    // }

    // const filteredData = products.filter(product => selectedValues.includes(product.category))

    return (
        <div className='pl-[30px] mt-8 md:mt-20 pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
            <span className='flex items-center md:hidden text-[#BCB7B7] font-medium text-lg mb-4'>
                <Link href='/'>Home/</Link>
                <Link href='/marketplace'> Marketplace/ </Link>
                <Link className='text-[#292929]' href='/editorials'>Editorials</Link>
            </span>
            <span className='flex md:hidden text-[#BCB7B7] italic mb-4'>Showing 1-5  of 18 results</span>
            <div className='flex gap-[72px] items-center'>
                <form className='hidden lg:flex'>
                    <input
                        type='text'
                        value={searchTerm}
                        onChange={submit}
                        placeholder='Search'
                        style={{ backgroundImage: `url(${search.src})` }}
                        className='bg-no-repeat	bg-[#F4F2F2] bg-left pl-[60px] h-[60px] w-[215px] rounded-[15px] text-xl'
                    />
                </form>
                <div className='flex md:pl-[30px] md:pr-[30px] justify-between w-full shadow-[4px_4px_64px_rgba(0,0,0,0.1)] h-auto md:h-[91px] items-center rounded-[15px]'>
                    <p className='text-2xl text-black hidden md:flex'>See 1-6 of 15 results</p>
                    <button className='text-lg md:text-2xl justify-start pl-5 md:pl-0 md:justify-center rounded-md flex md:hidden items-center md:border border-gray-700 w-[191px] h-[58px]'>
                        Filter
                        <RiArrowDropDownLine className='w-[36px] h-[29px]' />
                    </button>
                    <button className='text-lg md:text-2xl justify-end  md:justify-center rounded-md flex items-center md:border border-gray-700 w-[191px] h-[58px]'>
                        Sort by
                        <RiArrowDropDownLine className='w-[36px] h-[29px]' />
                    </button>
                </div>
            </div>
            <div className=' flex gap-[57px] mt-[31px] md:mt-[89px]'>
                <div className='w-[25%] hidden lg:block'>
                    <span className='hidden md:flex items-center justify-between gap-[14.67] border-b-4 border-[#AFB091] pb-2 pr-16'>
                        <Image className='w-[53.33px] h-[59.76px]' src={fil} alt='filter' />
                        <span className='text-[32px] font-medium'>Filter</span>
                    </span>
                    <div>
                        <span
                            className='flex items-center justify-between mt-14 '
                            onClick={() => setCategory(!category)}
                        >
                            <h3 className='text-[28px] font-medium leading-[44.13px]'>By category</h3>
                            <RiArrowDropUpLine className={category ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                        </span>
                        {category && (
                            <div className='flex flex-col gap-5 mt-8'>
                                {categories.map((category, index) => {
                                    return (
                                        <form className='flex' key={index}>
                                            <input
                                                type='checkbox'
                                                name={category}
                                                // ref={category}
                                                value={category}
                                                // onChange={handleChange}
                                                className='opacity-0 absolute w-[26px] h-[26px]' />
                                            <div className="bg-[#D9D9D9]  rounded-md w-[26px] h-[26px] flex flex-shrink-0 justify-center items-center mr-2">
                                                <svg className="fill-current hidden w-3 h-3 text-black pointer-events-none" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <g transform="translate(-9 -11)" fill="#000" fillRule="nonzero">
                                                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <label htmlFor={category}>{category}</label>
                                        </form>
                                    )
                                })}
                            </div>
                        )}
                        <span
                            className='flex items-center justify-between mt-14 mb-8'
                            onClick={() => setPrice(!price)}
                        >
                            <h3 className='text-[28px] font-medium leading-[44.13px]'>By price</h3>
                            <RiArrowDropUpLine className={price ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                        </span>
                        {price && (<div>
                            <p>$100.00 - $150.00</p>
                            <input type='range' min="0" max="100" />
                        </div>)}
                        <span
                            className='flex items-center justify-between mt-14 mb-8'
                            onClick={() => setArtist(!artist)}
                        >
                            <h3 className='text-[28px] font-medium leading-[44.13px]'>By artists</h3>
                            <RiArrowDropUpLine className={artist ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                        </span>
                        {artist && (<div>
                            <p className='underline text-2xl leading-[32.4px] mb-5'>All</p>
                            {artists.map((artist, index) => (
                                <p className='text-2xl leading-[32.4px] mb-5' key={index}>{artist}</p>
                            ))}
                        </div>)}
                        <span
                            className='flex items-center justify-between mt-14 mb-8'
                        // onClick={() => setArtist(!artist)}
                        >
                            <h3 className='text-[28px] font-medium leading-[44.13px]'> Collection year</h3>
                            <RiArrowDropUpLine className={artist ? 'w-[36px] h-[29px] mt-2 ease-out duration-300 ' : 'transform rotate-180 ease-out duration-300 w-[36px] h-[29px] mt-2'} />
                        </span>
                    </div>
                </div>
                <div className='grid relative grid-cols-1 pb-36 md:grid-cols-2 xl:grid-cols-3 gap-y-[42px] gap-x-[53px] justify-items-end w-full lg:w-[75%]'>
                    {products.map((item) => {
                        if (item.id > 9) return
                        return (
                            <Link href={`marketplace/${item.name}`} key={item.id} className='bg-white flex w-full flex-col p-3 shadow-[0px_34px_64px_rgba(217,225,244,0.36)] h-[414px] rounded-[15px]'>
                                <Image className='w-full h-[280px] object-cover rounded-lg' src={item.image} alt={item.name} />
                                <span className='text-[22px] leading-[34.67px] text-[#333] mt-[10px]'>{item.name}</span>
                                <span className='text-[#333] text-[28px] font-bold leading-[44.13px] mt-[18px] pb-[7px]'>${item.price}</span>
                            </Link>
                        )
                    })}
                    <button className='h-[73px]  hidden md:block absolute right-[50%] translate-x-[50%] bottom-2 w-[249px] border border-[#333333] rounded-[10px] text-[30px] text-[#333333] font-medium text-center '>See more</button>
                    <span className='flex cursor-pointer md:hidden items-center gap-3 text-[20px]'>Load more <BsArrowRight className='border border-[#616161] rounded-full p-2 w-[40px] h-[42px]' /></span>
                </div>

            </div>
            <section className='flex flex-col md:hidden border-[#333333]  pb-[29.15px] '>
                <h2 className='font-basker text-2xl md:text-[30.21px] pt-6 leading-[39.06px]'>NewsLetter</h2>
                <p className='text-[11.64px] md:text-[32px]'>Subscribe to get daily updates on new drops & exciting deals </p>
                <form className='flex flex-col md:flex-row gap-[23px] mt-[25px] mb-[25px] md:mt-9 md:mb-9'>
                    <input
                        className='font-basker border border-[#333] h-[46px] md:h-[60px] pl-4 md:pl-[50px] w-[300px] sm:w-[340px] md:w-[446px]'
                        type='email'
                        placeholder='Enter your Email'

                    />
                    <button className='font-basker uppercase border bg-[#333] text-white h-[53.64px] md:h-[60px] text-center w-[181.63px]'>Subscribe</button>
                </form>
            </section>
        </div>
    )
}

export default Marketplace