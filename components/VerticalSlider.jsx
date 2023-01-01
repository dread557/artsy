import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

import v1 from '/public/v1.png'
import v2 from '/public/v2.png'
import v3 from '/public/v3.png'


const VerticalSlider = () => {

    const [currImg, setCurrImg] = useState(0)
    const images = [v1, v2, v3]
    const incrementcurrImg = useCallback(() => {
        setCurrImg((currImg + 1) % images.length);
    }, [currImg, images.length]);

    useEffect(() => {
        const interval = setInterval(incrementcurrImg, 2000);
        return () => clearInterval(interval);
    }, [incrementcurrImg]);



    return (
        <div className='absolute top-[15%] left-[50%]'>
            <Image
                src={images[currImg]}
                alt="Carousel"
                className='transition-opacity ease-in-out duration-500 delay-200'
                style={{ opacity: currImg === 0 ? 1 : 0 }}
            />
        </div>

    )
}

export default VerticalSlider