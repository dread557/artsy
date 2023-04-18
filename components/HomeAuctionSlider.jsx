import Image from 'next/image';
import { upComingSlide } from '../data/upComingSlide';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import 'swiper/css';
import Link from 'next/link';
import { useState } from 'react';


const HomeAuctionSlider = () => {
    const slideWidth = 100 / upComingSlide.length
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideWidthPercent, setSlideWidthPercent] = useState(slideWidth)
    const prevSlide = () => {
        if (currentSlide !== 0) {
            setCurrentSlide(currentSlide - 1)
            setSlideWidthPercent(slideWidthPercent - (100 / upComingSlide.length))
        } else {
            setCurrentSlide(upComingSlide.length - 1)
            setSlideWidthPercent((100 / upComingSlide.length) * upComingSlide.length)
        }
    }
    const nextSlide = () => {
        if (currentSlide !== upComingSlide.length - 1) {
            setCurrentSlide(currentSlide + 1)
            setSlideWidthPercent(slideWidthPercent + (100 / upComingSlide.length))
        } else {
            setCurrentSlide(0)
            setSlideWidthPercent(100 / upComingSlide.length)
        }
    }

    return (
        <div className='bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C056097D] pl-[30px] pr-[30px] md:pl-[65px] md:pr-[65px] lg:pl-[120px] lg:pr-[120px]'>
            <h2 className='font-medium font-satoshi text-2xl lg:text-[40px] leading-[54px] text-white border-b-2 pt-[25px] pb-[17px] mb-[21px]'>See Upcoming Auctions and Exhibitions</h2>
            <div style={{ backgroundImage: `url(${upComingSlide[currentSlide].bg?.src})` }} className=' bg-no-repeat h-[336px] transition-all ease-in-out delay-200 bg-cover p-3 lg:h-[546px] flex flex-col justify-start lg:justify-end lg:p-[30px]'>
                <span className='flex items-baseline gap-2 md:ml-[41px]'>
                    <div className='h-4 w-4 bg-white rounded-full'></div>
                    <h2 className='font-bellefair text-white ml-[21px] lg:ml-0 md:text-[29.23px] max-w-[353.88px]'>{upComingSlide[currentSlide].title}</h2>
                </span>
                <span className='flex gap-2 md:ml-[41px]'>
                    <h2 className='font-bellefair text-[40px] lg:text-[67.61px] leading-[77.48px] text-[#E1E1E1]'>{upComingSlide[currentSlide].id}</h2>
                    <div>
                        <span className='font-poppins text-xs lg:text-[13.46px] text-white mt-[15.31px]'>{upComingSlide[currentSlide].date}</span>
                        <div className='flex flex-col lg:flex-row self-end mb-[52.05px] mt-[12.5px] gap-10 lg:gap-[100px]'>
                            <p className='font-satoshi text-[10px] lg:text-[15.86px] lg:max-w-[60%] text-white leading-[21px] tracking-[.065em]'>{upComingSlide[currentSlide].caption}</p>
                            <div className='flex items-center gap-[29px] justify-end'>
                                <Link className='text-white border-b lg:text-2xl font-satoshi whitespace-nowrap' href='#'>See more</Link>
                                <button className='border p-[15px] lg:text-2xl font-satoshi text-white rounded-[10px] whitespace-nowrap'>Set a reminder</button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div className='hidden md:flex justify-between items-center pb-[26px]'>
                <div className='bg-[#AEAEAE] w-[295.69px] h-[10px] rounded-[50px]'>
                    <div style={{ width: `${slideWidthPercent}%` }} className='bg-white  h-full  rounded-[50px]'>

                    </div>
                </div>
                <div className='flex items-center gap-[19px] mt-[21px]'>
                    <div onClick={() => prevSlide()} className='w-[69.71px] cursor-pointer h-[69.71px] rounded-full bg-transparent relative shadow-lg'>
                        <MdKeyboardArrowLeft className='absolute  text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[18.65px] h-[18.65px]' />
                    </div>
                    <div onClick={() => nextSlide()} className='w-[69.71px] cursor-pointer h-[69.71px] rounded-full bg-transparent relative shadow-lg'>
                        <MdKeyboardArrowRight className='absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[18.65px] h-[18.65px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAuctionSlider