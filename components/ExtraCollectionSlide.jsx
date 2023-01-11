import React, { useState } from 'react'
import Image from 'next/image';
import { products } from '../data/products'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import 'swiper/css';
import Link from 'next/link';

const ExtraCollectionSlide = () => {
    const [liked, setLiked] = useState(false)

    const selected = products.filter((item) => item.id >= 10)
    return (
        <div className='flex justify-between mt-[30px] md:mt-[100px]'>
            <Swiper
                spaceBetween={50}
                navigation
                breakpoints={{
                    256: {
                        width: 256,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1.7
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2.1
                    },
                }}
            >
                {selected.map((item) => (
                    <div key={item.id}>
                        <SwiperSlide>
                            <div className=' border border-[#333] p-4 relative'>
                                <button onClick={() => { setLiked(!liked) }} className='absolute right-[40px]'>
                                    {liked ? (
                                        <BsHeart className='h-[47.29px] w-[32.36px]' />
                                    ) : (
                                        <BsHeartFill className='text-red-700 h-[47.29px] w-[32.36px]' />
                                    )}
                                </button>
                                <Link href={`${item.name}`}>
                                    <Image className='pt-[50px]' src={item.image} alt={item.name} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    )
}

export default ExtraCollectionSlide